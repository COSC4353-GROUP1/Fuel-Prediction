import passport from "passport";
import passportLocal from "passport-local"
import userModel from "./../models/userModel"
import { transError, transSuccess } from "./../../lang/Eng";

let LocalStrategy = passportLocal.Strategy;



let InitPassportLocal = () => {
    passport.use(new LocalStrategy({usernameField: "username", passwordField: "password", passReqToCallback: true}, 
    async function (req,username,password,done) {
            try {

                // console.log(username)
                let user = await userModel.findByUsername(username);
                if (!user) {
                    return done(null, false, req.flash("error", transError.login_failed))
                }
                
                // console.log(password)
                let checkPassword = await user.comparePassword(password)
                if (!checkPassword) {
                    return done(null, false, req.flash("error", transError.login_failed))
                } else {
                    return done(null, user, req.flash("success", transSuccess.loginSuccess(user.username)))
                }
            } catch (error) {
                return done(null, false, req.flash("error",transError.server_error))
                
            }
        }
    ))
    // save userId session
    passport.serializeUser((user,done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        userModel.findUserById(id) 
        .then(user => {
            return done(null, user);
        })
        .catch(error => {
            return done(error, null);
        })
    });
    

}

module.exports = InitPassportLocal;

