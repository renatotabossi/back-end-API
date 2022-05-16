require("dotenv").config();
const fetch = require("cross-fetch");
const { json } = require("express/lib/response");
const mongoose = require("mongoose");
const University = require("./models/university");

// MongoDB connection
mongoose
    .connect("mongodb://localhost:27017/universities")
    .then(async () => {
        console.log("Connection open on seed.js");
        await populateDB();
    })
    .catch((err) => {
        console.log({ message: err.message });
    });

// Populate function
async function populateDB() {
    const url = "http://universities.hipolabs.com/search?country=";

    let countries = [
        "argentina",
        "brasil",
        "chile",
        "colombia",
        "paraguai",
        "peru",
        "suriname",
        "uruguay",
    ];

    let universityList = [];
    const asyncRes = await Promise.all(
        countries.map(async (country) => {
            try {
                const response = await fetch(url + country);
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
            } catch (error) {
                console.log(error);
            }
        })
    );
    University.insertMany(universityList, (err, list) => {
        mongoose.disconnect(() => {
            try {
                console.log({ message: "disconnected from DB" });
            } catch (err) {
                console.log({ message: err.message });
            }
        });
    });
}
