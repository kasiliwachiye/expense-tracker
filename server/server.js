import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error(`Unable to connect to database: ${config.mongoUri}`);
  }
};

connectToDatabase();

app.listen(config.port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info("Server started on port %s.", config.port);
  }
});
