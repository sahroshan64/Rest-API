const express = require('express')
const coursesRouter= require("./routes/courses");
const bodyParser = require('body-parser');
require("dotenv").config()
const mongoose = require('mongoose')
const app = express()
const port = 4000  
app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter)// use of middleware
 


mongoose.connect(process.env.DB_CONNECTION_URL).then(()=>{  
    console.log("The connection is sucessfully") 
}).catch(()=>{
    console.log("The connection is not sucessfully")
})         
  
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`) 
})                    