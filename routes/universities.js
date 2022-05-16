const express = require("express");
const router = express.Router();

// Model
const University = require("../models/university");

// Get all universities
router.get("/", async (req, res) => {
    const { country } = req.query;
    let { pageSize, pageIndex } = req.query;
    if (pageSize > 20 || !pageSize) pageSize = 20;
    if (!pageIndex) pageIndex = 1;

    let universities = [];
    try {
        if (country) {
            let capitalizedCountry =
                country.charAt(0).toUpperCase() + country.slice(1);
            universities = await University.find({
                country: capitalizedCountry,
            })
                .limit(pageSize)
                .skip((pageIndex - 1) * pageSize)
                .sort()
                .exec();
        } else {
            universities = await University.find()
                .limit(pageSize)
                .skip((pageIndex - 1) * pageSize)
                .sort()
                .exec();
        }
        return res.status(200).json(universities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one university using ID
router.get("/:id", getUniversity, (req, res) => {
    res.send({
        ID: res.university.id,
        alpha_two_code: res.university.alpha_two_code,
        web_pages: res.university.web_pages,
        name: res.university.name,
        country: res.university.country,
        domains: res.university.domains,
        state_province: res.university.state_province,
    });
});

// Post one university
router.post("/", async (req, res) => {
    const university = new University({
        alpha_two_code: req.body.alpha_two_code,
        web_pages: req.body.web_pages,
        name: req.body.name,
        country: req.body.country,
        domains: req.body.domains,
        state_province: req.body.state_province,
    });

    try {
        let foundUniversity = await University.find({
            state_province: university.state_province,
            country: university.country,
            name: university.name,
        }).exec();

        if (foundUniversity.length > 0) {
            return res
                .status(409)
                .json({ message: "University already on DB" });
        }
        const newUniversity = await university.save();
        res.status(201).json(newUniversity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update univeristy using ID
router.patch("/:id", getUniversity, async (req, res) => {
    if (req.body.web_pages != null) {
        res.university.web_pages = req.body.web_pages;
    }
    if (req.body.name != null) {
        res.university.name = req.body.name;
    }
    if (req.body.domains != null) {
        res.university.domains = req.body.domains;
    }
    try {
        const updatedUniversity = await res.university.save();
        res.json(updatedUniversity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete university using ID
router.delete("/:id", getUniversity, async (req, res) => {
    try {
        await res.university.remove();
        res.json({ message: "Deleted University" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function
async function getUniversity(req, res, next) {
    let university;
    try {
        university = await University.findById(req.params.id);
        if (university == null) {
            return res.status(404).json({ message: "Cannot find University" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.university = university;
    next();
}

module.exports = router;
