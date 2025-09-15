const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0:27017/men')  // add port 27017
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

module.exports = connection;
