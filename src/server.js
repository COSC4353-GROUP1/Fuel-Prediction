// var express = require("express");
import express from "express";
import configViewEngine from "./config/viewEngine"
import initRoutes from "./routes/web"
import bodyParser from "body-parser";
import passport from "passport";
import connectFlash from "connect-flash";
import {connectDB} from "./config/connectDB"
// import session from "express-session";
import session from "./config/session";
import cookieParser from "cookie-parser";


//Init app
let app = express();

//connect mongodb
connectDB()

//config Session
session.config(app)

//config view engine
configViewEngine(app);


//Enable post data for request
app.use(bodyParser.urlencoded({extended: true}))

//using flash
app.use(connectFlash());

//use Cookie Parser
app.use(cookieParser());

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//config passport js
app.use(passport.initialize());
app.use(passport.session());

//Init routes
initRoutes(app);
app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    console.log(`Hello Group 1, I am running at ${process.env.APP_HOST}:${process.env.APP_PORT}/`)
});