const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://anjali:anjalianil@cluster0.fb2fy.mongodb.net/providance?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log("connected to mongoDB")
})
.catch((err)=>{
    console.log(err);
})