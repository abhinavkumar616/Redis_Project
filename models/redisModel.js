const mongoose = require('mongoose');


const redisModelScheam = new mongoose.Schema({

    name: String,
    email: String,
})

const redisModelModel = new mongoose.model("redischeck", redisModelScheam);

module.exports = redisModelModel