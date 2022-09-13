require("dotenv").config();
const mongoose = require("mongoose");
const CONFIG = require("./config");
const connectDB = async () => {
  try {
    await mongoose.connect(CONFIG.MONGO_CONNECT, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
      // dbName: process.env.MONGO_DB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log(error);
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};
module.exports = connectDB;
