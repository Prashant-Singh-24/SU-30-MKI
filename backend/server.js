const app = require('./app')
const express= require('express')
const dotenv= require('dotenv')
const connectDatabase= require('./database/database');

//Config
dotenv.config({path:'backend/config/config.env'});

//Database connection
connectDatabase();



const server= app.listen(process.env.PORT,()=>{
    console.log(`Server running at https://localhost:${process.env.PORT}`);
});

