const mongoose = require("mongoose");
const StuSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    city:String,
    assignedTask: String
})


module.exports = mongoose.model("Student", StuSchema);