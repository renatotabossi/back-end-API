const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    nome: {
        type: String,
    },
    pais: {
        type: String,
    },
    estado: {
        type: String,
    },
});
