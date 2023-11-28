import mongoose from "mongoose"; 
import bcrypt from "bcrypt"


//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let UserSchema = new Schema({
  username: String,
  password: String,
  gender: {type: String, default: "male"},
  phone: {type: Number, default: null},
  address_1: {type: String, default: null},
  address_2: {type: String, default: null},
  city: {type: String, default: null},
  state: {type: String, default: null},
  zipcode: {type: String, default: null},
  tokenUpdated: {type:Boolean, default: false},
  createAt: {type: Number, default: Date.now},
  updateAt: {type: Number, default: Date.now},
  deleteAt: {type: Number, default: Date.now}
},{
  capped: { size: 1024 },
  bufferCommands: false,
  autoCreate: false
});


// function create new use in mongoose
UserSchema.statics = {
  // function create new use in mongoose
    createNew(item) {
        return this.create(item);
    },
    findByUsername(username) {
      return this.findOne({"username": username}).exec();
    },
    findUserById(id) {
      return this.findById(id).exec();
    },
    updateUser(id, item) {
      return this.findByIdAndUpdate(id, item).exec();
    }
}
UserSchema.methods = {
  comparePassword(password){
    return bcrypt.compare(password,this.password)
  }
}

module.exports = mongoose.model ("user",UserSchema);



