const Quote = require('../models/quoteModel');

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
  const user = await User.findOne(req.body.username);
  
  console.log(quote);
  if(!quote) {
    return res.status(400).send('Failed to sumbit form');
  }
  res.render('Master/fuelPrediction', {
    quote: quote 
  });
}

    
module.exports = {
    createQuote: createQuote
};