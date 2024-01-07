 
const mongoose = require("../db")
 
 
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    sex:String
})
 
 
 
const studentModel = mongoose.model("student",studentSchema,"student")
 
module.exports = {
    studentModel
}