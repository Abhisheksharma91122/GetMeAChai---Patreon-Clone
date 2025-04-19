// models/db.js
import mongoose from "mongoose";

const url = process.env.MONGO_URI;

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
