import mongoose from "mongoose"; 
import bcrypt from "bcrypt"


//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let QuoteSchema = new Schema({
    gallons: {type: Number, default: null},
    delivery_address: {type: String, default: null},
    delivery_date: {type: Date, default: null},
    suggested_price : {type:Number, default: null},
    total_cost: {type: Number, default: null},
});

// function create new use in mongoose
QuoteSchema.statics = {
  // function create new use in mongoose
    createNew(item) {
        return this.create(item);
    }
}


module.exports = mongoose.model ("quote",QuoteSchema);

