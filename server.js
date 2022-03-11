require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const University = require("./models/university");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database!"));

app.use(express.json());

const universitiesRouter = require("./routes/universities");
app.use("/universities", universitiesRouter);

app.listen(3000, () => {
    console.log("server started on port 3000");
});
