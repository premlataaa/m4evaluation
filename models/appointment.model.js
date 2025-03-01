const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
    patientId:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    doctorId:{type:mongoose.Schema.Types.ObjectId, ref:"Doctor"},
    apoointmentDateTime:{type:Date,Date:Date.now()},
    symptoms:{type:String},
    fees:{Type:Number},
    prescription:{type:String},
    isDiagnosisDone:{type:Boolean}
})

const AppointmentModel = mongoose.model("Appointment",AppointmentSchema);
module.exports = AppointmentModel;