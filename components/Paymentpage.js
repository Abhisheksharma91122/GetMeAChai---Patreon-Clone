"use client"

import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { initiate, fetchpayments, fetchuser } from '@/actions/useraction'
import { useSession } from 'next-auth/react'
import dotenv from "dotenv";
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
dotenv.config();

const Paymentpage = ({ username }) => {
    // const { data: session } = useSession()

    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    })
    const [loading, setLoading] = useState(true)
    const [currentUser, setcurrentUser] = useState({})
    const [payment, setPayment] = useState([])
    const searchParams = useSearchParams();
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast.success("payment success")
        }
        router.push(`/${username}`)
    }, [])




    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    }


    const getData = async () => {
        let a = await fetchuser(username);
        setcurrentUser(a);
        let dbpayments = await fetchpayments(username);
        setPayment(dbpayments);
        setLoading(false)
        // console.log(payment.length)
    }



    const pay = async (amount) => {
        // get the orderId
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
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
                <img className='w-full object-cover h-[350]' src={currentUser.coverpic} alt="creator img" />
                <div className='absolute w-[100px] h-[100px] left-1/2 bottom-[-40px] transform -translate-x-1/2 rounded-2xl overflow-hidden'>
                    <img className='w-full h-full object-cover' src={currentUser.profilepic} alt="car img" />
                </div>
            </div>


            <div className="infor flex flex-col justify-center items-center my-16">
                <div className='font-bold text-2xl'>@{username}</div>
                <div className='text-sm'>Lets help {username} get a chai!</div>
                <div className='text-sm text-gray-500'>
                    {loading
                        ? 'Loading payments...'
                        : `${payment.length} payments . ₹${payment.reduce((total, p) => total + p.amount, 0) / 100} raised`}

                </div>

                <div className='payment flex flex-col md:flex-row gap-3 w-[80%] mt-11 h-[50%]'>
                    <div className='supporters w-full md:w-1/2 bg-slate-900 rounded-2xl p-10 overflow-y-auto min-h-[300px] max-h-[500px]'>
                        <h2 className='font-bold text-2xl text-center my-5'>Top 10 Supporters</h2>
                        <ul>
                            {payment.length == 0 && <li>No payments yet</li>}
                            {payment.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img src="/avatar.gif" width={33} alt="avatar img" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{parseInt(p.amount) / 100}</span> with message "{p.message}"
                                    </span>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className='makePayment w-full mt-4 md:mt-0 md:w-1/2 bg-slate-900 rounded-2xl p-10 min-h-[300px] md:max-h-[500px]'>
                        <h2 className='font-bold text-2xl text-center my-5'>Make Payment</h2>
                        <div className='flex flex-col gap-3'>
                            <input type="text" name='name' value={paymentform.name} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input type="text" name='message' value={paymentform.message} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="text" name='amount' value={paymentform.amount} onChange={(e) => handleChange(e)} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button onClick={() => { pay(parseInt(paymentform.amount) * 100) }} type="button" className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                    ${paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1
                                    ? 'bg-slate-500 cursor-not-allowed'
                                    : 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer'
                                }`} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}>pay</button>
                        </div>
                        {/* default payment buttons */}
                        <div className='flex flex-col md:flex-row mt-5 gap-3'>
                            <button className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                    ${paymentform.name?.length < 3 || paymentform.message?.length < 4
                                    ? 'bg-slate-500 cursor-not-allowed'
                                    : 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer'
                                }`} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => { pay(1000) }}>pay ₹10</button>
                            <button className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                    ${paymentform.name?.length < 3 || paymentform.message?.length < 4
                                    ? 'bg-slate-500 cursor-not-allowed'
                                    : 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer'
                                }`} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => { pay(2000) }}>pay ₹20</button>
                            <button className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                                    ${paymentform.name?.length < 3 || paymentform.message?.length < 4
                                    ? 'bg-slate-500 cursor-not-allowed'
                                    : 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 cursor-pointer'
                                }`} disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4} onClick={() => { pay(3000) }}>pay ₹30</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
