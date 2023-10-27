let getFuelPredictionController = (req, res) => {
    return res.render("master/fuelPrediction");
};

let postFuelPredictionData = (req, res) => {
    const { gallons, address, deliveryDate, suggestedPrice, totalDue } = req.body;

    res.json({ success: true, message: "Data processed successfully" });
};

module.exports = {
    getFuelPredictionController: getFuelPredictionController,
    postFuelPredictionData: postFuelPredictionData
};
