const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const bcrypt= require("bcryptjs");
const saltrounds = 10;

AuthRoute.Post("/auth/register", async(req,res)=>{
    const {name,password}=req.body;
    const hashedpass = await bcrypt.hash(password,10);
    try{
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).json({msg:"user registered sucessfully"});
    }catch(err){
        res.status(500).json({msg:"User Already exist"})
    }
    
});

AuthRoute.POST("/auth/login", async(req,res)=>{
    const {name,password}= req.body;
    const user = await  UserModel.findOne({name});
    if(!user)
        return res.status(400).json({msg:"invalid credentials"});

    const validPassword = await bcrypt.compare(password,user.password);
    if(!validPassword){
        return res.status(400).json({message:"incalid credentials"});

    }
    const token = jwt.sign(
        {id: user._id,name},process.env.SECRET_KEY,{expiredIn:"24h"}
    );
})

module.exports = AuthRoute;