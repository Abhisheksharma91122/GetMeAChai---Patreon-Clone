"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/models/db"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret
    console.log(user.razorpayid, secret)

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: x.amount, to_user: to_username, name: paymentform.name, message: paymentform.message });

    return x;
}


export const fetchuser = async (username) => {
    await connectDB();
    console.log(username);
    let u = await User.findOne({ username: username });
    let user = u.toObject({ flattenObjectIds: true })
    return user;
}

export const fetchpayments = async (username) => {
    await connectDB();
    // find all payments sorted by decreasing order of amount and flatten object
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean();

    // Normalize payments
    const normalized = p.map(payment => ({
        ...payment,
        _id: payment._id.toString(), // ObjectId to String
        createdAt: payment.createdAt?.toISOString(), // Date to String
        updatedAt: payment.updatedAt?.toISOString(), // Date to String
    }));

    return normalized;
}


export const updateProfile = async (data, oldUsername) => {
    await connectDB();
    let ndata = Object.fromEntries(data);

    // if the username is begin updated, check if username is available

    if (oldUsername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" };
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // now update all the username in the payment table
        await Payment.updateMany({to_user: oldUsername}, {to_user: ndata.username})

    } else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

}