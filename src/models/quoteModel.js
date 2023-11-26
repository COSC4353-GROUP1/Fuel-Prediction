import mongoose from "mongoose"; 
import { ObjectId } from "mongodb";


//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let QuoteSchema = new Schema({
    userId: ObjectId,
    gallons: {type: Number, default: null},
    delivery_address: {type: String, default: null},
    delivery_date: {type: Date, default: null},
    suggested_price : {type:Number, default: null},
    total_amount_due: {type: Number, default: null}
});

// function create new use in mongoose
QuoteSchema.statics = {
  
  findId (id) {
    return this.find(id)
  },
  // function create new use in mongoose
  createNew(item) {
    return this.create(item);
  },
  findUserById(id) {
    return this.findById(id).exec();
  }
}


module.exports = mongoose.model ("quote",QuoteSchema);

