const express = require("express");
const router = express.Router();

// Get todas as Uni
router.get("/", (req, res) => {
    res.send("hello world");
});

// Get uma uni usando ID
router.get("/:id", (req, res) => {
    res.send(req.params.id);
});

// Post uma uni
router.post("/", (req, res) => {});

// Update uma uni
router.patch("/:id", (req, res) => {});

// Delete uma uni
router.delete("/:id", (req, res) => {});

module.exports = router;
