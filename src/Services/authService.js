import UserModel from "./../models/userModel"
import bcrypt from "bcrypt"
import { transError, transSuccess } from "../../lang/Eng"


// register account with username and password
let register = (username,password) => {
    return new Promise(async(resolve, reject)=>{
        let userByUsername = await UserModel.findByUsername(username);
        if(userByUsername) {
            return reject(transError.account_in_use)
        }
        else {
            let salt = bcrypt.genSaltSync(10);
            let userItem = {
                username: username,
                password: bcrypt.hashSync(password, salt)
                };
    
            //create user and update it to database (assignment 4)
            let user = await UserModel.createNew(userItem);
            resolve(transSuccess.userCreated(user.username))
        }     
    }
)}

module.exports = {
    register: register
}