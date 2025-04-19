import mongoose, { mongo } from "mongoose";

const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: { type: String, require: true },
    to_user: { type: String, require: true },
    oid: { type: String, require: true },
    message: { type: String },
    amount: { type: Number, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});

const Payment = model("payment", PaymentSchema);
export default mongoose.model.Payment || Payment;