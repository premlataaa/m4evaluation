const express = require("express");
const authmw = require("../middlewares/authmw");
const AppointmentModel = require("../models/appointment.model");
const UserModel = require("../models/user.model");
const ObjectsTOCSV = require("objects-to-csv");

const AdminRoute = express.Router();

AdminRoute.get("/admin/users",authmw(["admin"]), async(req,res)=>{
   await UserModel.find("User");
   res.send(200).json({message:"list of all Users"})
});

AdminRoute.get("/admin/users/:id",authmw(["admin"]), async(req,res)=>{
    await UserModel.findById();
    res.send(200).json({message:"User found"})
});

AdminRoute.Delete("/admin/users/:id",authmw(["admin"]), async(req,res)=>{
    await UserModel.findOneAndDelete({_id:req.body.UserId});
    res.send(200).json({message:"User deleted"})
 });

AdminRoute.get("/admin/appointments",authmw(["admin"]), async(req,res)=>{
    await AppointmentModelModel.find("Appointment");
    res.send(200).json(Appointment);
}); 


AdminRoute.get("/admin/reports", (req,res)=>{
    let data = UserModel.find().lean();
    const CSV = new ObjectsTOCSV(data);
    CSV.toDisk("./medcare.csv");
    res.download("./medcare.csv");
});

module.exports = AdminRoute;