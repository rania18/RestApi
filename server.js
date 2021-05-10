const express = require('express')
const connectDB = require('./config/dbConnect')


//init our app
const app = express()
app.use(express.json())

//get dotenv variable
require('dotenv').config({path: './config/.env'})

//connect DB
connectDB();
const port =process.env.PORT

//require routes
app.use('/api/users', require("./routes/User.routes.js"))

//listen to the server
app.listen(port,(error,msg)=>{
    if (error) throw error;
    console.log(`Connected ${port}..`)
})