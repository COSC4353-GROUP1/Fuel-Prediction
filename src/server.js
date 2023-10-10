// var express = require("express");
import express from "express";
import configViewEngine from "./config/viewEngine"
import initRoutes from "./routes/web"
import bodyParser from "body-parser";
import passport from "passport";
import connectFlash from "connect-flash";

//Init app
let app = express();
let hostname = "localhost";
let port = 8017;

//config view engine
configViewEngine(app);

//config passport js
app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static("public"));
//Init all routes
app.use(bodyParser.urlencoded({extended: true}))

//using flash
app.use(connectFlash());


//Init routes
initRoutes(app);
app.listen(port, hostname, () => {
    console.log(`Hello Group 1, I am running at ${hostname}:${port}/`)
});