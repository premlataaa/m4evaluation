const express = require("express");
const jwt = require("jsonwebtoken");
const redis = require("ioredis");
const UserModel = require("./models/user.model");
const AppointmentModel = require("./models/appointment.model");

const PatientRoute = express.Router();
const saltrounds = 10;
const bcrypt = require("bcryptjs");
const AppointmentModel = require("../models/appointment.model");

const redisClient = redis.createClient();
redisClient.on("Error",(err) => 
    console.log("Redis Client Error"));
redisClient.connect();


PatientRoute.POST("/patient/appointments", async(req,res)=>{
    let patient = await UserModel.findOne({name:req.body.name});
    try{
        if(patient){
            res.status(303).json({message:"User already pressent"})
        }else{
            bcrypt.hash(req.body.password,saltrounds,async function(err,hash){
                if(err){
                    res.status(500).json({message:"something went wrong"})
                }else{
                    await  UserModel.create({...req.body,password:hash});
                    res.status(201).json({message:"created a new appointment"});
                }
            })
           
        }
    }catch(err){
        res.status(500).json({message:"something went wront in patient appointment"})
    }

});

PatientRoute.GET("/patient/appointments/", async(req,res)=>{
    res.status(200).json(AppointmentModel);
});


PatientRoute.PUT("/patient/appointments/:id", async(req,res)=>{
    const {patientId} = req.params;
    const {appointmentDateTime} = req.body;

    const appointment = appointments.find(PatientRoute => PatientRoute.patientId === patientId);
       if(!appointment){
        res.status(404).json({message:"appointment not found"})
       }

});


PatientRoute.POST("/patient/appointments/request-delete/:id", async(req,res)=>{
    const {patientId} = req.params;

    const AppointmentModel = AppointmentModel.find(PatientRoute => patientId === patientId);
     if(!appointment){
        return res.status(404).json({message:"appointment not found"})
     }

     await redisClient.set(`delete_request:${patientId}`, JSON.stringify(appointment));

     res.status(200).json({message:"Appointment deleted"});

    
});


module.exports = PatientRoute;