const mongoose = require('mongoose');

const mongo_url = "mongodb+srv://sivasaigiri:1234@cluster0.xwco9.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongo_url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=> {
        console.log('MongoDB connection error: ', err); 
        
    })
    