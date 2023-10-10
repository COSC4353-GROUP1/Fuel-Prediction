import passport from "passport";
import passportLocal from "passport-local"
import { userDB } from "../models/userDb";

let LocalStrategy = passportLocal.Strategy;



let InitPassportLocal = (req,res) => {
    passport.use(new LocalStrategy({usernameField: "username", passwordField: "password", passReqTpCallback: true}, function (username,password,done) {
            try {

                // console.log(username)
                let user = userDB.map(e => e.username).includes(username)
                if (!user) {
                    console.log("Username or Password Incorrect")
                }
                
                // console.log(password)
                let checkPassword = userDB.map(e => e.password).includes(password)
                if (!checkPassword) {
                    console.log("Username or Password Incorrect")
                } else {
                    console.log(`${username} Logins successfully`)
                }
            } catch (error) {
                console.log(error)
            }
        }
    ))
    

}

module.exports = InitPassportLocal;
