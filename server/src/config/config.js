require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 4400,
  jwtSecret: process.env.JWT_SECRET || "pizzatime",
  mongoUri: process.env.MONGO_URI || "mongodb+srv://zerin123:zerin123@cluster0.j0eoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};

export default config;
