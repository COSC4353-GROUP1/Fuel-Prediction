import FuelModel from "./../models/quoteModel"

let addNew = (userId, gallons, delivery_address, delivery_date, suggested_Price, total_Cost  )=> {
    return new Promise( async (resolve, reject)=> {
        //create contact
        let newInput = {
            userId: userId,
            gallons: gallons,
            delivery_address: delivery_address,
            delivery_date: delivery_date,
            suggested_Price: suggested_Price,
            total_Cost: total_Cost

        };
        let newItemInput = await FuelModel.createNew(newInput);
        
        resolve(newItemInput)
    });
}
module.exports = {
    addNew: addNew
}