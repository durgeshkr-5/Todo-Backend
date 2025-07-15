const mongoose = require('mongoose');
require('dotenv').config();


function connectMongoDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDb connected Successfully!!!!`);
    })
    .catch(() => {
        console.error(error)
    })
}

module.exports = connectMongoDB;