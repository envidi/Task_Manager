const mongoose = require("mongoose");

  const connectDB = (url)=>{
    return mongoose
    .connect(url)
    .then(() => console.log("Connected to the db"))
    .catch((err) => console.log("Error"));
  
  }
  module.exports = connectDB;
