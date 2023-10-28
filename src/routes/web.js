import express from "express";
import {auth, fuelPrediction, profile} from "./../controller/index"
import { authValid, profileValid } from "./../validation";
import passport from "passport";
import InitPassportLocal from "../controller/passportController";

InitPassportLocal();

let router = express.Router();

/**
 * Init all routes
 */

let InitRoute = (app) => {
    router.get("/loginRegister", auth.checkLoggedOut, auth.getLoginRegister);
    router.get("/profile", auth.checkLoggedIn, profile.getProfile);
    router.get("/fuelPrediction", auth.checkLoggedIn, fuelPrediction.getFuelPredictionController);
    router.get("/logout", auth.checkLoggedIn, auth.getLogOut)

    router.post("/register", auth.checkLoggedOut, authValid.register, auth.postRegister)

    
    router.post("/login", auth.checkLoggedOut, passport.authenticate("local",{
        successRedirect: "/profile",
        failureRedirect: "/loginRegister",
        successFlash: true,
        failureFlash: true
    }))
   
    router.post("/updateProfile", auth.checkLoggedIn, profile.profileUpdate);

    router.post("/fuelPredictionData", auth.checkLoggedIn, fuelPrediction.postFuelPredictionData);

    return app.use("/",router)
}
module.exports = InitRoute;


