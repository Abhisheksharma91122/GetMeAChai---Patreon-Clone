import mongoose from "mongoose";
import Razorpay from "razorpay";

const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: {type: String, require: true},
    name: {type: String},
    username: { type: String, require: true },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: {type: String},
    razorpaysecret: {type: String},
    createdAT: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);
export default User;