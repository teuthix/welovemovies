if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const theatersRouter = require("./theaters/theaters.router");
const moviesRouter = require("./movies/movies.router");

app.use(express.json());

app.use("/theaters", theatersRouter);
app.use("/movies", moviesRouter);

module.exports = app;
