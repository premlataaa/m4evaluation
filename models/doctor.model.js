const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name:{type:String, required:True},
    email:{type:String, unique:True},
    mobileNumber:{type:String},
    password:{type:String},
    role:{Enum:["admin","doctor","patient"]},
    specialization:{Enum:["nerves","heart","lungs","skin"]},
    availableDays:{type:String,Enum:["sun","mon","tue","wed","thu","fri","sat"]}

})

const DoctorModel = mongoose.model("Doctor",DoctorSchema);
module.exports = DoctorModel;
