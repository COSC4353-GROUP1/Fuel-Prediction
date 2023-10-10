import UserModel from "./../models/userModel"
import bcrypt from "bcrypt"


// register account with username and password
let register = (username,password) => {
    return new Promise(async(resolve, reject)=>{
        // let salt = bcrypt.genSaltSync(10);
        // let userItem = {
        //     username: username,
        //     password: bcrypt.hashSync(password, salt)
        // };

        // create user and update it to database (assignment 4)
        // let user = await UserModel.createNew(userItem);
        // console.log(user)
        // resolve(`${userItem.username} create account successfully`)
        console.log("Create an account successfully")
        
    }
)}

module.exports = {
    register: register
}