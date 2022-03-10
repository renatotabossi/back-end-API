const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    alpha_two_code: {
        type: String,
        require: true,
    },
    web_pages: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    domains: {
        type: String,
        require: true,
    },
    state_province: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("University", universitySchema);
