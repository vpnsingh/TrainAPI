const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
    number : {
        type : String,
        require : true,
        trim : true,
    },
    name : {
        type : String,
        trim : true,
        require : true
    },
    source : {
        type : String,
        trim : true,
        require : true,
        maxlength: 32
    },
    destination : {
        type : String,
        trim : true,
        require : true,
        maxlength: 32
    },
    departure_time : {
        type : String,
        required : true,
    },
    arrival_time : {
        type : String,
        required : true,
    }
}, {timestamps: true})

module.exports = mongoose.model("Train_Info", trainSchema);