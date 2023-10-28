const { get } = require('mongoose');
const Quote = require('../models/quoteModel');
let getQuote = (req,res) => {
  return res.render("Master/fuelPrediction");
}

const createQuote = async(req,res)=>{
    try {
    const { gallons, deliveryAddress, deliveryDate, suggestedPrice, totalCost } = req.body;
    const quote = await Quote( {
        gallons, deliveryAddress, deliveryDate, suggestedPrice, totalCost
      }, { new: true });
      
      res.json(quote);
      

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
}

    
module.exports = {
    getQuote: getQuote, createQuote
};