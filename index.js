const express = require("express");
const dotenv = require("dotenv");
const connectedToDB = require("./configs/mongo.config");
const AuthRoute= require("./routes/authentication.route")
const PatientRoute = require("./routes/patient.route")
const DoctorRoute = require("./routes/doctor.route")
const AdminRoute = require("./routes/admin.route")
const app = express();
app.use(express.json());
require("dotenv").config();
connectedToDB();

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("This is test route");
});

app.use("Auth",AuthRoute);
app.use("Admin",AdminRoute);
app.use("Doctor",DoctorRoute);
app.use("Patient",PatientRoute);

app.listen(PORT,()=>{
    console.log("server Started");
})