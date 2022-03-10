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
router.get("/:id", (req, res) => {
    res.send(req.params.id);
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
router.patch("/:id", (req, res) => {});

// Delete uma uni
router.delete("/:id", (req, res) => {});

module.exports = router;
