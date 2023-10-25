import {check} from "express-validator"
import { transValidation } from "../../lang/Eng";

//validate the password
let register = [
    check("password", transValidation.password_incorrect)
        .isLength({min:6})
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("password_confirmation", transValidation.password_confirmation_incorrect)
        .custom ((value,{req})=> {
            return value === req.body.password;
        })
]

module.exports = {
    register: register
}