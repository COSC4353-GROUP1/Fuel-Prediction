const User = require('../models/userModel');
let getProfile = (req,res) => {
    return res.render("auth/profile");
    
}

// GET profile

const profileUpdate = async(req,res)=>{
    try {
    const { name, gender, address_1, address_2, city, state, zipcode, phone } = req.body;
    const user = await User( {
        name, gender, address_1, address_2, city, state, zipcode, phone
      }, { new: true });
      
      res.json(user);
      

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
}

    
module.exports = {
    getProfile: getProfile,
    profileUpdate
};