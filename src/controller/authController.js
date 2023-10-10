import { validationResult } from "express-validator";
import { authSer } from "./../Services/index";
import { userDB } from "../models/userDb";

let getLoginRegister =  (req,res) => {
    return res.render("auth/loginRegister");
}

//update user to database (assigment 4)
let postRegister = (req,res) => {
    let errorArr= [];
    // console.log(validationResult(req));
    // console.log(validationResult(req).isEmpty()); 
    // console.log("-------------------------");
    // console.log(validationResult(req).mapped());
    
    // if there are error, show up error
    if(!validationResult(req).isEmpty()) {
        let errors = Object.values(validationResult(req).mapped());
        errors.forEach(item => {
            errorArr.push(item.msg)
        })
        // console.log(errors)
        console.log("Error:", errorArr)
        return res.redirect("/loginRegister")
    } 
    try {
        let userItem = {
            username: req.body.username,
            password: req.body.password
        }
        //successfully create a new user
        userDB.push(userItem)
        console.log(req.body)

        authSer.register(req.body.username,req.body.password) 
        return res.redirect("/loginRegister");
    } catch(error) {
        // fail to create a new user
        errorArr.push(error)
        console.log("Error:", errorArr)
        return res.redirect("/loginRegister");
    }
    
    
}
    
module.exports = {
    getLoginRegister: getLoginRegister,
    postRegister: postRegister
}