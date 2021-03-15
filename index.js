require("dotenv").config();

// IMPORTS
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ROUTES
const trainRoutes = require("./routes/index");

// DB CONNECTION
mongoose.connect(process.env.DATABASE, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then( ()=> {
    console.log("DB CONNECTED");
})

// INITIALIZATION
const express = require("express");
const app = express();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.unsubscribe(cors());

app.use("/api", trainRoutes);

// PORT CREATION
const PORT = process.env.PORT || 8000;

// STARTING SERVER
app.get("/", (req, res)  => {
    res.send("Train API")
});
app.listen(PORT, ()=> {
    console.log(`Server is listening at ${PORT}`)
});