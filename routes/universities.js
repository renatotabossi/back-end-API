const express = require("express");
const router = express.Router();
const University = require("../models/university");

// Get todas as Uni
router.get("/", async (req, res) => {
    try {
        const universities = await University.find();
        res.json(universities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get uma uni usando ID
router.get("/:id", getUniversity, (req, res) => {
    res.send({
        ID: res.university.id,
        NAME: res.university.name,
        COUNTRY: res.university.country,
        STATE_PROVINCE: res.university.state_province,
    });
});

// Post uma uni
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
        const newUniversity = await university.save();
        res.status(201).json(newUniversity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update uma uni
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

// Delete uma uni
router.delete("/:id", getUniversity, async (req, res) => {
    try {
        await res.university.remove();
        res.json({ message: "Deleted University" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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
