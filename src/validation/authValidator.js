import {check} from "express-validator"

//validate the password
let register = [
    check("password","password need to include lowercase letters, capital letters, digits, and special characters (@, #, &, etc.)")
        .isLength({min:6})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("password_confirmation", "password confirmation does not match")
        .custom ((value,{req})=> {
            return value === req.body.password;
        })
]

module.exports = {
    register: register
}