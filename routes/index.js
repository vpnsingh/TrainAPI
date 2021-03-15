const express = require("express");
var router = express.Router();

const { 
    getAllTrains, 
    getTrainByNo, 
    getTrainInfo, 
    createTrainDetails 
} = require("../controllers/index");

router.param("trainNo", getTrainByNo);

router.post("/traindetails/create", createTrainDetails);

router.get("/traindetails/:trainNo", getTrainInfo);

router.get("/alltrains", getAllTrains);

module.exports = router;