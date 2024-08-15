import dotenv from "dotenv";

dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "pochi",
  mongoUri:
    process.env.MONGO_URI || "mongodb://localhost:27017/expense-tracker",
};

export default config;
