require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const University = require("./models/university");

// Mongo connection with Try/Catch
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database!"));

app.use(express.json());

// Routes
const universitiesRouter = require("./routes/universities");
app.use("/universities", universitiesRouter);

// Live server on port 3000
app.listen(3000, () => {
    console.log("server started on port 3000");
});
