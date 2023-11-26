import QuoteModel from "./../models/quoteModel"
import UserModel from "./../models/userModel"
import { transError } from "../../lang/Eng";

let addNew = (userId, gallons, delivery_address, delivery_date, suggested_price, total_amount_due )=> {
    return new Promise( async (resolve, reject)=> {
        //create fuel input
        let newInput = {
            userId: userId,
            gallons: gallons,
            delivery_address: delivery_address,
            delivery_date: delivery_date,
            suggested_price: suggested_price,
            total_amount_due: total_amount_due
        };
        let newItemInput = await QuoteModel.createNew(newInput);
        
        resolve(newItemInput)
    });
}

let findUserId = (id)=> {
    return new Promise( async (resolve, reject)=> {
        let user = await UserModel.findUserById(id)
        console.log(user)
        resolve(user)
    }
)}

let locationFactor = (location) => {
    return new Promise( async (resolve, reject)=> {
    let address = location.split(",")
    let trimmedAddress = address.map(element => element.trim());
    console.log(trimmedAddress);
    if (trimmedAddress.includes("texas") || trimmedAddress.includes("tx") || trimmedAddress.includes("TX") || trimmedAddress.includes("Texas")) {
        resolve(0.02)   // 2% for Texas
    } else {
        resolve(0.04) // 4% for out of state
    }}
        
)}
let gallonRequestedFactor = (gallons) => {
    return new Promise( async (resolve, reject)=> {
    if (gallons > 1000) {
        resolve(0.02)  // 2% if more than 1000 gallons
    } else {
        resolve(0.03)  // 3% if 1000 gallons or less
    }}
        
)}

let rateHistoryFactor = (username) => {
    return new Promise( async (resolve, reject)=> {
        // Find the user by username
        const user = await UserModel.findByUsername(username);
    
        // User not exist
        if (!user) {
          resolve(transError.user_not_found);
        }
    
        // Find fuel delivery orders for the user
        const fuelOrders = await QuoteModel.findId({userId: user._id})
        // console.log("fuelOrders[0].userId: ",fuelOrders[0].userId)
        if (fuelOrders.length > 0) {
            resolve(0.01); // 1% rate history factor if there are fuel delivery orders
        } else {
            resolve(0.00); // 0% rate history factor if there are no fuel delivery orders
        }
    })
}

let fuelHistoryService = (username) => {
    return new Promise( async (resolve, reject)=> {
      const user = await UserModel.findByUsername(username);
  
      if (!user) {
        // Consider sending an error response here
        return res.status(404).json({ error: 'User not found' });
      }
  
      const fuelOrders = await QuoteModel.findId({ userId: user._id });
  
      resolve(fuelOrders)
    })
}
module.exports = {
    addNew: addNew,
    findUserId: findUserId,
    locationFactor: locationFactor,
    gallonRequestedFactor: gallonRequestedFactor,
    rateHistoryFactor: rateHistoryFactor,
    fuelHistoryService: fuelHistoryService
}
