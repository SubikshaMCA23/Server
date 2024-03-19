const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', function (req, res){
  res.send('welcome')
})

//fetch (get method)//
app.get('/data',function(req,res) {Data.find().then((item)=> res.send(item))})

//post//
app.post('/create', function(req,res) {Data.create(req.body).then((item)=> res.send(item))})
app.listen(8080, () => {
  console.log("server is connected")
})

mongoose.connect("mongodb+srv://nandhini:nandhu@cluster0.dh5en4s.mongodb.net/mca").then(()=>console.log("mongoDB is Connected"))

//update//
app.put("/update/:id",function(req,res){
  Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))
})

//delete//
app.delete("/delete/:id",function(req,res){
 
  Data.findByIdAndDelete({_id:req.params.id}).then((item)=>res.send(item))
})




//create a schema//
var newSchema = new mongoose.Schema({

     name:String,
     email:String,
     password:String,
     amount:Number
})

//model//

let Data = mongoose.model('mca',newSchema)

//create a data for testing//

// let data1 = new Data(
//     {
//         name:"Nandhini.R",
//         email:"nandhu@gmail.com",
//         password:"beni",
//         amount:24564
//     }
// )

//save data//

// data1.save()

