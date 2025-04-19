// models/db.js
import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/chai";

if (!url) {
  throw new Error("MONGO_URI is not defined in environment variables.");
}

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
