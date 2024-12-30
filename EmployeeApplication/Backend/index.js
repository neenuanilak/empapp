const express = require('express')
require("./connection")
var empmodel=require("./model/employee")
var cors=require('cors')
const app = express()
app.use(express.json())
app.use (cors())
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/trial",(req,res)=>{
    res.send("trial message")   
}
)
app.post("/add",async(req,res)=>{
    try{
        await empmodel(req.body).save()
        res.send({message:"data added"})
    }
        catch (error) {
        console.log(error)
    }
})
app.get("/view",async(req,res)=>{
    try{
        data=await empmodel.find()
        res.send(data)
    }
    catch(error){
        console.log(error)
    }
})
app.delete("/remove/:id",async(req,res)=>{
    try{
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({message:"data deleted"})
    }
    catch(error) {
        console.log(error)
    }
    }
)
app.put("/update/:id",async(req,res)=>{
    try{
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"data updated"})
    }
    catch (error){
        console.log(error)
    }
})
app.listen(3004,()=>{
    console.log('server is running on port 3004')
}
)
