const Quote = require('../models/quoteModel');
const createQuote = async(req,res)=>{
    try {
    const { gallons, inState, isCustomer, profitMargin } = req.body;
    const quote = await Quote( {
        gallons, inState, isCustomer, profitMargin
      }, { new: true });
      
      res.json(quote);
      

    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
}

    
module.exports = {
    createQuote: createQuote
};