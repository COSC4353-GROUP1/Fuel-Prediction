// var express = require("express");
import express from "express";
import configViewEngine from "./config/viewEngine"
import initRoutes from "./routes/web"

//Init app
let app = express();
let hostname = "localhost";
let port = 8017;

//config view engine
configViewEngine(app);

//Init all routes
initRoutes(app);
app.listen(port, hostname, () => {
    console.log(`Hello Group 1, I am running at ${hostname}:${port}/`)
});