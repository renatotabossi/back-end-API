require("dotenv").config();
const fetch = require("cross-fetch");
const mongoose = require("mongoose");
const University = require("./models/university");

mongoose
    .connect("mongodb://localhost:3000/universities")
    .then(() => {
        console.log("Connection open on seed.js");
    })
    .catch((err) => {
        console.log({ message: err.message });
    });

const urlARG = ["http://universities.hipolabs.com/search?country=argentina"];

urlARG.map(async (url) => {
    try {
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
                nastate_province: resultData[i].state_province,
            });
            university.save(() => {
                console.log("saved" + university);
                let saveCounter = 0;
                saveCounter++;

                if (saveCounter === resultData.length) {
                    mongoose
                        .disconnect()
                        .then(() =>
                            console.log(
                                "saved succesfully and mongodb disconnected"
                            )
                        )
                        .catch((error) => console.log(error));
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
});
