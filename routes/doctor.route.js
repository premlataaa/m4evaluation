const express = require("express");
const authmw = require("../middlewares/authmw");
const AppointmentModel = require("../models/appointment.model");
const UserModel = require("../models/user.model");


const DoctorRoute = express.Router();

DoctorRoute.get("/doctor/appointments",authmw(["Doctor"]), async(req,res)=>{
   await AppointmentModel.find("Appointment");
   res.send(200).json(Appointment)
});

DoctorRoute.put("/doctor/appointments/:id",authmw(["doctor"]), async(req,res)=>{
    await AppointmentModel.findByIdAndUpdate({_id:req.body.patientId,fees,prescription,isDiagnosisDone});
    res.send(200).json({message:"User found"})
});


module.exports = DoctorRoute;