import { validationResult } from "express-validator";
import { authSer } from "./../Services/index";
import { transSuccess } from "../../lang/Eng";
import userModel from "./../models/userModel"


let getLoginRegister =  (req,res) => {
    return res.render("auth/loginRegister/loginRegister",{
        errors: req.flash("error"),
        success: req.flash("success")
    });
}


let postRegister = async (req,res) => {
    let errorArr= [];
    let successArr = [];
    // console.log(validationResult(req));
    // console.log(validationResult(req).isEmpty()); 
    // console.log("-------------------------");
    // console.log(validationResult(req).mapped());
    
    // if there are error, show up error
    if(!validationResult(req).isEmpty()) {
        let errors = Object.values(validationResult(req).mapped());
        errors.forEach(item => {
            //push errors into array
            errorArr.push(item.msg)
        })
        req.flash("error", errorArr)
        // console.log(errors)
        // console.log("Error:", errorArr)
        return res.redirect("/loginRegister")
    } 
    try {
        //successfully create a new user
        let createUserSuccess = await authSer.register(req.body.username,req.body.password) ;
        successArr.push(createUserSuccess);
        req.flash("success", successArr)
        return res.redirect("/loginRegister");
    } catch(error) {
        // fail to create a new user
        errorArr.push(error)
        req.flash("error", errorArr)
        return res.redirect("/loginRegister");
    }
    
    
}
let getLogOut = (req,res, next) => {
    //remove session passport
    req.logout(function(err){
        if(err) {
            return next(err)
        } 
        req.flash("success", transSuccess.logoutSuccess);  
        return res.redirect("/loginRegister")  
    }); 
    
    
}
let checkLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()) {
        return res.redirect("/loginRegister")
    }
    next();
}
let checkLoggedOut = (req,res,next) => {
    if(req.isAuthenticated()) {
        return res.redirect("/profile")
    }
    next();
}


    
module.exports = {
    getLoginRegister: getLoginRegister,
    getLogOut: getLogOut,
    postRegister: postRegister,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    
}