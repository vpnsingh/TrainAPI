const trainModel = require("../models/index");

// GET ALL TRAINS DETAILS
exports.getAllTrains = (req, res) => {
    trainModel.find()
    .exec((err, trains) => {
        if(err){
            return res.status(500).json({error : "Sorry !! Fail to load train details.."})
        }
        res.json(trains);
    })
}

// MIDDLEWARE FOR TRAIN NO
exports.getTrainByNo = (req, res, next, number) => {
    trainModel.findOne({number}, (err, data) => {
        if(err){
            return res.status(500).json({error: `Train information is not available for ${no}`})
        }
        req.trains = data;
        next();
    })
}

// GET SINGLE TRAIN INFO
exports.getTrainInfo = (req, res) => {
    return res.json(req.trains);
}

// INSERT TRAIN RECORD IN DB
exports.createTrainDetails = (req, res) => {
    const trains = new trainModel(req.body);
    trains.save((err, info) => {
        if(err){
            return res.status(500).json({
                error : "Not able to save train information.."
            })
        }
        res.json(info)
    })
}