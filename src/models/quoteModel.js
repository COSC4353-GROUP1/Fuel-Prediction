import mongoose from "mongoose"; 
import bcrypt from "bcrypt"


//use to connect to mongodb
// model for users
const { Schema } = mongoose;

let QuoteSchema = new Schema({
    deliveryAddress: {type:Boolean, default: true},
    deliveryDate: NativeDate,
    suggestedPrice : {type:Boolean, default: false},
    gallons: {type: Number, default: null},
    totalCost: {type: Number, default: null},
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
QuoteSchema.statics = {
  // function create new use in mongoose
    createNew(item) {
        return this.create(item);
    }
}
/*QuoteSchema.methods = {
  calcQuote(){ return quote }
}*/

module.exports = mongoose.model ("quote",QuoteSchema);

QuoteSchema.method.createData = function(inputData, callback){
               
     quoteData= new quoteTable(inputData);
     quoteData.save(function(err, data){
       if (err) throw err;
        return callback(data);
     });
  }
module.exports = mongoose.model("Quote", QuoteSchema);