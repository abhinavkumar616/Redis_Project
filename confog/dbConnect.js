const mongoose = require("mongoose");

const connectDatabase =( )=>{

    mongoose.connect("mongodb://localhost:27017/redis",
    {useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Mongodb connected with serever`);
    })
    .catch((error)=>{
        console.log(`Somehthing went wrong while connecting with Database.`);
    })

};

module.exports = connectDatabase



