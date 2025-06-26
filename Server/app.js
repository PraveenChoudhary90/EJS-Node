const bodyParser = require("body-parser");
const express = require("express");
const app  = express();
const mongoose = require("mongoose");
const StuRoute = require("./Routes/StuRoute");


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/StudentTask").then(()=>{
    console.log("DB IS CONNECTED");
})

app.set("view engine", "ejs");

app.use("/students", StuRoute);

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})