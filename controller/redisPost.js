const redisModel = require("../models/redisModel");
const redis = require("redis");
const express = require("express");

const router = express.Router();

// Create Redis client (initialize it outside of the request handler)
const redisClient = redis.createClient();
redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});
redis
// POST endpoint to create new data
const redisPost = async (req, res) => {
    try {
        const { name, email } = req.body;
        console.log("req.body", req.body);

        // Save data to MongoDB
        const newData = new redisModel({ name, email });
        await newData.save();

        // Cache the data in Redis
        redisClient.setex(name, 3600, JSON.stringify({ name, email }), (err, reply) => {
            if (err) {
                console.error("Redis setex error:", err);
            } else {
                console.log("Data cached in Redis:", reply);
            }
        });

        console.log("Data created successfully");

        res.status(201).json({ message: "Data created successfully" });
    } catch (error) {
        console.error("Error creating data:", error);
        res.status(500).json({
            error: "Internal server error",
            message: error.message
        });
    }

};

module.exports = router;
