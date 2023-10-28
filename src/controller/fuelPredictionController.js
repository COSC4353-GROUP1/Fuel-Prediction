import { fuelSer } from "../Services/index";

let getFuelPredictionController = (req, res) => {
    return res.render("master/fuelPrediction");
};

let postFuelPredictionData = async (req, res) => {
    console.log(req.body);
    try {
        let currentUserId = req.user._id;
        let gallons = req.body.gallons;
        let delivery_address = req.body.delivery_address;
        let delivery_date = req.body.delivery_date;
        let suggested_price = 0;
        let total_cost = 0
        let newInput = await fuelSer.addNew(currentUserId, gallons, delivery_address,delivery_date, suggested_price, total_cost )
        return res.status(200).send({success: !! newInput})
    } catch(error) {
        return res.status(500).send(error);
    }
};

module.exports = {
    getFuelPredictionController: getFuelPredictionController,
    postFuelPredictionData: postFuelPredictionData
};
