import mongoose from "mongoose"; 


//use to connect to mongodb
// model for users
let Schema = mongoose.Schema; 

let UserSchema = new Schema({
  username: String,
  gender: {type: String, default: "male"},
  address_1: {type: String, default: null},
  address_2: {type: String, default: null},
  city: {type: String, default: null},
  state: {type: String, default: null},
  zipcode: {type: Number, default: null},
  phoneNumber: {type: Number, default: null},
  createAt: {type: Number, default: Date.now},
  updateAt: {type: Number, default: Date.now},
  deleteAt: {type: Number, default: Date.now}
});


// function create new use in mongoose
UserSchema.statics = {
    createNew(item) {
        return this.create(item);
    }
}


module.exports = mongoose.model ("user",UserSchema);
UserSchema.methods.updateProfile = function(updates) {
  // update fields
  this.set(updates);
  return this.save();
}
UserSchema.methods.clearProfile = function() {
  // reset fields
  this.set({
    name: '',
    gender: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: ''
  });
  
  return this.save();
}