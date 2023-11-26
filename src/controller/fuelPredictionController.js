import { fuelSer } from "../Services/index";


let calculateInput = async(req,res)=> {
    try {
        const companyProfitFactor = 0.1
        let gallons = req.body.gallons;
        let delivery_address = req.body.delivery_address;
        let suggested_price = req.body.suggested_price;
        let total_amount_due = req.body.total_amount_due;

        let locationFactor =  await fuelSer.locationFactor(delivery_address)
        console.log("locationFactor: ",locationFactor)

        let gallonRequestedFactor = await fuelSer.gallonRequestedFactor(gallons)
        console.log("gallonRequestedFactor: ", gallonRequestedFactor)

        const { username } = req.user;
        let rateHistoryFactor = await fuelSer.rateHistoryFactor(username)

        console.log("rateHistoryFactor: ", rateHistoryFactor)

        const Margin = Number(((locationFactor - rateHistoryFactor + gallonRequestedFactor + companyProfitFactor) * (gallons/1000)).toFixed(3))
        console.log("Margin: ",Margin)

        suggested_price = Number((Margin + ((gallons/1000))).toFixed(3))
        console.log("suggested_price: ", suggested_price)

        total_amount_due = Number((gallons * suggested_price).toFixed(3))
        console.log("total_amount_due: ", total_amount_due)

        console.log(req.body.delivery_date);
        return res.status(200).send({
            suggested_price: suggested_price,
            total_due: total_amount_due,
        });

    } catch(error) {
        return res.status(500).send(error);
    }
}

let submitFormDataController = async(req,res) => {
    try {
        const userId = req.user._id; // Add this line if userId is sent from the client
        const gallons = req.body.gallons;
        const delivery_address = req.body.delivery_address;
        const delivery_date = req.body.delivery_date;
        const suggested_price = req.body.suggested_price;
        const total_due = req.body.total_due;

        let newInput = await fuelSer.addNew(userId , gallons,delivery_address, delivery_date, suggested_price, total_due)
        return res.status(200).send({success: !! newInput})
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).send({ success: false, error: error.message });
    }
}

const fuelHistoryController = async (req, res) => {
    try {
    const { username } = req.user;

      let userInput = await fuelSer.fuelHistoryService(username)
      // Assuming you want to send the content in the response
      //   console.log("userInput: ", userInput)
      return res.render("master/fuelPrediction", {userInput}) 
    } catch (error) {
      console.log(error);
      // Send an appropriate error response
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    calculateInput: calculateInput,
    submitFormDataController: submitFormDataController,
    fuelHistoryController: fuelHistoryController
}