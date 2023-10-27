const User = require('../models/userModel');

const getProfile = async (req, res) => {

  
  
  const user = await User.findOne(req.body.username);
  
  console.log(user);
  if(!user) {
    return res.status(400).send('User not found');
  }
  res.render('auth/profile', {
    user: user 
  });
  
}



// GET profile


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
      phone: req.body.phone
    }, 
    {
      new: true // return updated doc
    });
    req.flash('success', 'Profile updated successfully!'); 

    res.redirect('/profile');

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
}

    
module.exports = {
    getProfile: getProfile,
    profileUpdate
};