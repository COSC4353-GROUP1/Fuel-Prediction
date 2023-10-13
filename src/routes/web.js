import express from "express";
import {auth, fuelPrediction, profile, profileUpdate} from "./../controller/index"
import { authValid } from "../validation";
import passport from "passport";
import InitPassportLocal from "../controller/passportController";

InitPassportLocal();

let router = express.Router();

/**
 * Init all routes
 */

let InitRoute =(app) => {
    router.get("/loginRegister", auth.getLoginRegister);
    router.get("/profile", profile.getProfile);
    router.get("/fuelPrediction", fuelPrediction.getFuelPredictionController);

    router.post("/register", authValid.register, auth.postRegister)

    router.post("/login", passport.authenticate("local",{
        successRedirect: "/profile",
        failureRedirect: "/loginRegister",
        successFlash: true,
        failureFlash: true
    }));
   
    router.post('/updateProfile', profile.profileUpdate);
    return app.use("/",router)
}
module.exports = InitRoute;