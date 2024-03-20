// const express= require("express")
// const mongoose = require("mongoose");
// const redis = require("redis");

// const dbConnect=require("./confog/dbConnect")
// const router=require("./routes/redisRoute")
// dbConnect()

// const app=express()
// app.use(express.json())
// app.use("/",router)

// app.get("/",(req,res)=>{
//     res.send("hello")
// })

// app.listen(8000,()=>{
//     console.log("server is running on 8000");
// })



// const express= require("express")
// const mongoose = require("mongoose");
// const redis = require("redis");

// const app=express()
// app.use(express.json())

// const redisClient = redis.createClient({
//     host: 'localhost', // Redis server host
//     port: 6379,       // Redis server port
//     // Optionally, if Redis server requires authentication:
//     // password: 'your_password'
// });

// redisClient.connect();
// redisClient.on("connect",function(err){
//     console.log("connected Redis");
// })

// app.get("/home",async(req,res)=>{

//     // let keyName="abhinav"
//     // let result={
//     //     id:"12",
//     //     name:"abhinav kumar"
//     // }
//     // let getCacheData=await redisClient.get(keyName)
//     // let data="";
//     // if(getCacheData){
//     //     data=json.parse(getCacheData)
//     //     console.log("getCacheData",getCacheData);
//     // }
//     // else{
//     //     console.log("Set Cache");
//     //     redisClient.set(keyName,JSON.stringify(result),{EX:30})
//     //     data=result;
//     // }


//     // #################### Hash ###############

//     let parentKey="abhinavProject"
//     let keyName="second"
//     getcacheData= await redisClient.hGet(parentKey,keyName);

//     let testData= await redisClient.hGetAll(parentKey)
//     console.log("testData",testData);
//     let result={
//         id:10,
//         name:"Test Data"
//     }

//     let data="";
//     if(getcacheData){
//         data=JSON.parse(getcacheData)
//         console.log("GET Cache");
//     }
//     else{
//         console.log("SET Cache");
//         redisClient.hSet(parentKey,keyName,JSON.stringify(result))
//         data=result
//     }

//     redisClient.DEL(parentKey)
//     res.status(200).json({
//        data:data
//     })
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })


/////////////////////////////////////////////////////////////



// const express= require("express")
// const mongoose = require("mongoose");
// const redis = require("redis");

// const app=express()
// app.use(express.json())

// const redisClient = redis.createClient({
//     host: 'localhost', // Redis server host
//     port: 6379,       // Redis server port
//     // Optionally, if Redis server requires authentication:
//     // password: 'your_password'
// });

// redisClient.connect();
// redisClient.on("connect",function(err){
//     console.log("connected Redis");
// })

// app.get("/home",async(req,res)=>{

//     let keyName="abhinav"
//     let result={
//         id:"12",
//         name:"abhinav kumar"
//     }
//     let getCacheData=await redisClient.get(keyName)
//     let data="";
//     if(getCacheData){
//         data=JSON.parse(getCacheData)
//         console.log("getCacheData",getCacheData);
//     }
//     else{
//         console.log("Set Cache");
//         redisClient.set(keyName,JSON.stringify(result))
//         data=result;
//     }

//     res.status(200).json({
//        data:data
//     })
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })




// const express = require("express");
// const mongoose = require("mongoose");
// const redis = require("redis");
// const { promisify } = require("util");

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://abhinav0011:welcome0011@cluster0.dprrrwl.mongodb.net/myapp", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// const User = mongoose.model("User", { id: String, name: String });

// const redisClient = redis.createClient({
//     host: "localhost", // Redis server host
//     port: 6379, // Redis server port
//     // Optionally, if Redis server requires authentication:
//     // password: 'your_password'
// });

// const getAsync = promisify(redisClient.get).bind(redisClient);
// const setAsync = promisify(redisClient.set).bind(redisClient);



//     redisClient.on("connect", function (err) {
//         console.log("Connected to Redis");
//     });

// // app.get("/home", async (req, res) => {
// //     try {
// //         const keyName = "abhinav";
// //         let data = await getAsync(keyName);

// //         if (!data) {
// //             console.log("Cache Miss");
// //             const result = {
// //                 id: "12",
// //                 name: "abhinav kumar",
// //             };

// //             const user = new User(result);
// //             await user.save();

// //             await setAsync(keyName, JSON.stringify(result));
// //             data = result;
// //         } else {
// //             console.log("Cache Hit");
// //             data = JSON.parse(data);
// //         }

// //         res.status(200).json({ data });
// //     } 
// redisClient.on("connect", async function () {
//     try {
//         console.log("Connected to Redis");

//         app.get("/home", async (req, res) => {
//             try {
//                 const keyName = "abhinav";
//                 let data = await getAsync(keyName);

//                 if (!data) {
//                     console.log("Cache Miss");
//                     const result = {
//                         id: "12",
//                         name: "abhinav kumar",
//                     };

//                     const user = new User(result);
//                     await user.save();

//                     await setAsync(keyName, JSON.stringify(result));
//                     data = result;
//                 } else {
//                     console.log("Cache Hit");
//                     data = JSON.parse(data);
//                 }

//                 res.status(200).json({ data });
//             }
//             catch (error) {
//                 console.error("Error:", error);
//                 res.status(500).json({ error: "Internal Server Error" });
//             }
//         });
//     }
//     catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // const PORT = process.env.PORT || 3000;
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });



const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
const { promisify } = require("util");

const app = express();
const bodyparser = require('body-parser');
const { log } = require("util");
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const User = mongoose.model("User", { id: String, name: String });

// Connect to Redis
const redisClient = redis.createClient({
    host: "localhost", // Redis server host
    port: 6379, // Redis server port
    // Optionally, if Redis server requires authentication:
    // password: 'your_password'
});
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);


// redisClient.connect();
// redisClient.on("error", function (err) {
//     console.error("Redis Error:", err);
// });

redisClient.connect();
redisClient.on("connect", function (err) {
    console.log("connected Redis");
})

// POST endpoint to create a new user
// app.post("/users", async (req, res) => {
//     try {
//         const { id, name } = req.body;
//         const user = new User({ id, name });
//         await user.save();

//         // Cache the user data in Redis
//         setAsync(id, JSON.stringify(user));

//         res.status(201).json(user);
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

app.post("/post", async (req, res) => {

    let {id, name}=req.body

    let data=new User({id, name})
    await data.save()
    // Cache the user data in Redis
    console.log("Set Cache");
    redisClient.set(id, JSON.stringify(data))
    data = data;

    res.status(200).json({
        data: data
    })

})


app.get("/get/:id", async (req, res) => {

    let id = req.params.id
    let getCacheData = await redisClient.get(id)
    if (getCacheData) {
        console.log("getCacheData", getCacheData);
        return res.status(200).json(JSON.parse(getCacheData));
    }
    console.log("cache missed");
    let findUser = await User.findOne({ id: id })
    console.log("findUser", findUser);
    if (!findUser) {
        return res.status(404).json({
            message: "Data not available in database..."
        })
    }
    await redisClient.set(id, JSON.stringify(findUser))
    console.log('Retrieved user from database');
    res.json(findUser);
})

app.get("/getAllData",async(req,res)=>{
    // let getCacheData = await redisClient.get()
    // console.log("getCacheData",getCacheData);
    let allKeys = await redisClient.keys('*');
    console.log("allKeys",allKeys);

})

app.listen(3000, () => {
    console.log("Server is running on 3000");
});