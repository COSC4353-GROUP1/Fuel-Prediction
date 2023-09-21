import express from "express";

let router = express.Router();

/**
 * Init all routes
 */

let InitRoute =(app) => {
    router.get("/loginRegister", (req,res) => {
        return res.render("auth/loginRegister");
    });
    router.get("/profile", (req,res) => {
        return res.render("auth/profile");
    });
    router.get("/fuelPrediction", (req,res) => {
        return res.render("master/fuelPrediction");
    });

    return app.use("/",router)
}
module.exports = InitRoute;