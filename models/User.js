import mongoose from "mongoose";

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: String, require: true},
    name: {type: String},
    username: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    createdAT: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = model("user", UserSchema);
export default mongoose.model.User || User;