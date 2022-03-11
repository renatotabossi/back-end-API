const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    alpha_two_code: {
        type: String,
    },
    web_pages: {
        type: String,
    },
    name: {
        type: String,
    },
    country: {
        type: String,
    },
    domains: {
        type: String,
    },
    state_province: {
        type: String,
    },
});

module.exports = mongoose.model("University", universitySchema);
