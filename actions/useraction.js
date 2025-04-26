"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/models/db"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({oid: x.id, amount: x.amount, to_user: to_username, name: paymentform.name, message: paymentform.message});

    return x;
}


export const fetchuser = async(username) => {
    await connectDB();
    console.log(username);
    let u = await User.findOne({username: username});
    let user = u.toObject({flattenObjectIds: true})
    return user;
}

export const fetchpayments = async(username) => {
    await connectDB();
    // find all payments sorted by decreasing order of amount and flatten object
    let p = await Payment.find({to_user: username, done: true}).sort({amount: -1}).lean();

    // Normalize payments
    const normalized = p.map(payment => ({
        ...payment,
        _id: payment._id.toString(), // ObjectId to String
        createdAt: payment.createdAt?.toISOString(), // Date to String
        updatedAt: payment.updatedAt?.toISOString(), // Date to String
    }));

    return normalized;
}