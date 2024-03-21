const dotenv = require("dotenv").config();
const PORT = process.env.PORT
const URL = process.env.URL
const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser= require('body-parser')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',function (req,res){
res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("welcome")
})
app.get('/data',function(req,res){
    Data.find().then((item)=>res.send(item))
})
app.post('/create',function(req,res){
    console.log(req.body)
    Data.create(req.body).then((item)=>res.send(item))
})
app.put('/update/:id',function(req,res){
   const id= req.params.id;
   console.log(req.body);
    Data.findByIdAndUpdate({_id:id},req.body).then((item)=>res.send(item))
})
app.delete('/delete/:id',function(req,res){
    const id= req.params.id;
    console.log(req.body);
    try{
        Data.findByIdAndDelete({_id:id}).then((item)=>res.send(item))
    }
    catch(e){
        console.log(e.message);
    }
    
 })
app.listen(PORT,()=>{
    console.log("server connected")
})

mongoose.connect(URL).then(()=>console.log("Mongodb connected"))
//create scheme
var newSchema= new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    amount:Number
})
//model
let Data = mongoose.model("mca",newSchema)
 //createa data for testing
 let data1 = new Data({
     name:"Lavanya D",
     password:"lava",
    amount:20000
 })
// save data
// data1.save()