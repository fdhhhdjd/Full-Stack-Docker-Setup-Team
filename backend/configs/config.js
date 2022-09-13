require("dotenv").config();
module.exports = {
  MONGO_DB: process.env.MONGO_DB,
  MONGO_CONNECT: process.env.MONGODB_URL,
};
