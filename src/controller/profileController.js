import {UserSchema} from "../models/userModel"
let getProfile = (req,res) => {
    return res.render("auth/profile");
    
}

// GET profile
const profile = []
const profileUpdate = (req,res)=>{

    const data = req.body
    profile.push(data)
    for (let i = 0; i<profile.length; i++){
        console.log(">>> :", profile[i]);
    }
    res.send("update successfully!")
}
 
module.exports = {
    getProfile: getProfile,
    profileUpdate
};