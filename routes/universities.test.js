const { default: mongoose } = require("mongoose");
const request = require("supertest");
const University = require("../models/university");
const router = require("./universities");
const fetch = require("cross-fetch");
const { populate } = require("../models/university");

const MONGO_URL = "mongodb://localhost/universities";
const MONGODB_URL = "mongodb://localhost:27017/universitiesTEST";

describe("User test", () => {
    let universities = [];
    beforeAll(async () => {
        await mongoose.connect(MONGO_URL);
    });
    // Get all universities without query should return all unis
    it("should get all universities", async () => {
        universities = await University.find();
        expect(universities.length).toBeGreaterThan(0);
    });

    afterAll(async () => {
        // await mongoose.connection.db.dropCollection(universities);
        await mongoose.connection.close();
    });
});

describe("Populate DB test", () => {
    let universities = [];
    beforeAll(async () => {
        await mongoose.connect(MONGODB_URL);
    });

    // Seeds DB with universities

    it("should populate the DB with the universities from the APIs", async () => {
        let universityList = [];

        async function populateDB() {
            const url =
                "http://universities.hipolabs.com/search?country=uruguay";
            const response = await fetch(url);
            const json = await response.json();
            resultData = [...json];
            for (let i = 0; i < resultData.length; i++) {
                let university = new University({
                    alpha_two_code: resultData[i].alpha_two_code,
                    web_pages: resultData[i].web_pages,
                    name: resultData[i].name,
                    country: resultData[i].country,
                    domains: resultData[i].domains,
                    state_province: resultData[i]["state-province"],
                });
                universityList.push(university);
            }
        }

        await populateDB();
        expect(universityList.length).toBe(6);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });
});
