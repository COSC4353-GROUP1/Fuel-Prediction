import mongoose from "mongoose"; 


//use to connect to mongodb
// model for users
let Schema = mongoose.Schema; 

let UserSchema = new Schema({
  username: String,
  gender: {type: String, default: "male"},
  phone: {type: Number, default: null},
  address: {type: String, default: null},
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
