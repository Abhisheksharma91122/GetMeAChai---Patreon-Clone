"use client"

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { initiate, fetchpayments, fetchuser } from '@/actions/useraction'
import { useSession } from 'next-auth/react'
import dotenv from "dotenv";
dotenv.config();

const Paymentpage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [currentUser, setcurrentUser] = useState({})
    const [payment, setPayment] = useState([])

    useEffect(() => {
        getData()
    }, [])



    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
        console.log(paymentform)
        console.log("KEY_ID:", process.env.NEXT_PUBLIC_KEY_ID);
    }


    const getData = async () => {
        let a = await fetchuser(username);
        setcurrentUser(a);
        let dbpayments = await fetchpayments(username);
        setPayment(dbpayments);
        console.log("this is a : ", a, payment)
    }



    const pay = async (amount) => {
        // get the orderId
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "get me a chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `http://localhost:3000/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full bg-red-50 relative'>
                <img className='w-full object-cover h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/182420/de3345b5d2fd4e1ead2893fd3672ebc4/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/1.png?token-time=1746316800&token-hash=S4H0nM2J2mEigECbc3MpegkdlgzQfZY1slafXGjyRfo%3D" alt="creator img" />
                <div className='absolute w-[100px] h-[100px] left-1/2 bottom-[-40px] transform -translate-x-1/2 rounded-2xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src="/car.jpg" alt="car img" />
                </div>
            </div>


            <div className="infor flex flex-col justify-center items-center my-16">
                <div className='font-bold text-2xl'>@{username}</div>
                <div className='text-sm'>creating Music on Vinyl, T-Shirts and all sorts of other stuff</div>
                <div className='text-sm text-gray-500'>
                    102 members &bull; 475 posts
                </div>

                <div className='payment flex gap-3 w-[80%] mt-11 h-[50%]'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-2xl p-10 overflow-y-auto min-h-[300px] max-h-[500px]'>
                        <h2 className='font-bold text-2xl text-center my-5'>Supporters</h2>
                        <ul>
                            {payment.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img src="/avatar.gif" width={33} alt="avatar img" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{parseInt(p.amount)/100}</span> with message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className='makePayment w-1/2 bg-slate-900 rounded-2xl p-10 min-h-[300px] max-h-[500px]'>
                        <h2 className='font-bold text-2xl text-center my-5'>Make Payment</h2>
                        <div className='flex flex-col gap-3'>
                            <input type="text" name='name' value={paymentform.name} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input type="text" name='message' value={paymentform.message} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="text" name='amount' value={paymentform.amount} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={()=>{pay(parseInt(paymentform.amount)*100)}} type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">pay</button>
                        </div>
                        <div className='flex mt-5 gap-3'>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer' onClick={() => { pay(1000) }}>pay ₹10</button>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer' onClick={() => { pay(2000) }}>pay ₹20</button>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer' onClick={() => { pay(3000) }}>pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
