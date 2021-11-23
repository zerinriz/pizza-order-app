require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4400,
  jwtSecret: process.env.JWT_SECRET || "pizzatime",
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/pizzaproject",
};

export default config;
