export const transValidation = {
    password_incorrect: "password need to include lowercase letters, capital letters, digits, and special characters (@, #, &, etc.)",
    password_confirmation_incorrect: "password confirmation does not match",
    update_username: "Username is limited to 3-50 characters and is not allowed in special characters",
    update_gender: "Gender error",
    update_address: "Address is limited about 3-100 characters",
    update_city: "city is limited about 3-100 characters",
    update_state: "State is limited about 2 characters",
    update_zipCode: "ZipCode is limited about 5-9 characters",
    update_phone: "Phone Number is needed to be numbers"
}

export const transSuccess  ={
    userCreated: (username) =>{
        return `Account <Strong> ${username} </Strong> is created successfully`;
        
    },
    loginSuccess: (username) => {
        return `${username} Logins successfully`
    },
    logoutSuccess: "Log out successfully",
    user_info_updated: "Information is updated successfully"
}

export const transError = {
    account_in_use: "Username is used already",
    login_failed: "Username or Password Incorrect",
    server_error: "Server error, please contact us for help"
}

 