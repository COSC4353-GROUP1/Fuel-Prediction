const User = require('../models/userModel');

let getProfile = (req,res) => {
  
  if(!req.user.tokenUpdated)
    return res.render("auth/profile",{
      user : req.user,
  });

  else
    return res.redirect("fuelPrediction");
}

// GET profile

let getProfile_updated = (req,res) => {
  
  
  return res.render("auth/profile",{
    user : req.user,
});


}


let profileUpdate = async(req,res)=>{
    try {
    
    // Get user id from session
    const userId = req.user.id;

    // Validate request 
    if(!userId) {
      return res.status(401).send('Unauthorized');
    }

    // Update user document
    const user = await User.findByIdAndUpdate(userId, {
      username: req.body.name,
      gender: req.body.gender,
      address_1: req.body.address_1,
      address_2: req.body.address_2,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
      tokenUpdated:true
    }, 
    {
      new: true // return updated doc
    });
    req.flash('success', 'Profile updated successfully!'); 

    res.redirect('/fuelPrediction');

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
}

    
module.exports = {
    getProfile: getProfile,
    profileUpdate: profileUpdate,
    getProfile_updated:getProfile_updated
};