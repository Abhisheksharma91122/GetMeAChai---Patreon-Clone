// models/db.js
import mongoose from "mongoose";

const url = "mongodb+srv://Auth-test:bcy6LxIhJ1BnUlaU@cluster0.4ofad.mongodb.net/Chai?retryWrites=true&w=majority&appName=Cluster0";

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
