const express = require("express");
const redisPost = require("../controller/redisPost");

const router = express.Router();


router.post("/redisPost",redisPost)

module.exports=router