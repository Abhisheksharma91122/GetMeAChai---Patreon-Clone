"use client"

import React from 'react'
import Script from 'next/script'

const Paymentpage = ({ username }) => {
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <Script>
                {`var options = {
                    "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
                "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Acme Corp", //your business name
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the id obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
                "notes": {
                    "address": "Razorpay Corporate Office"
    },
                "theme": {
                    "color": "#3399cc"
    }
};
                var rzp1 = new Razorpay(options);
                document.getElementById('rzp-button1').onclick = function(e){
                    rzp1.open();
                e.preventDefault();
}`}
            </Script>
            
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

                <div className='payment flex gap-3 w-[80%] mt-11'>
                    <div className='supporters w-1/2 bg-slate-900 rounded-2xl p-10'>
                        <h2 className='font-bold text-2xl text-center my-5'>Supporters</h2>
                        <ul>
                            <li className='my-4 flex gap-2 items-center'>
                                <img src="/avatar.gif" width={33} alt="avatar img" />
                                <span>
                                    Subam donated <span className='font-bold'>$30</span> with message "I support you bro. lots of ❤️"
                                </span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img src="/avatar.gif" width={33} alt="avatar img" />
                                <span>
                                    Subam donated <span className='font-bold'>$30</span> with message "I support you bro. lots of ❤️"
                                </span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img src="/avatar.gif" width={33} alt="avatar img" />
                                <span>
                                    Subam donated <span className='font-bold'>$30</span> with message "I support you bro. lots of ❤️"
                                </span>
                            </li>

                        </ul>
                    </div>

                    <div className='makePayment w-1/2 bg-slate-900 rounded-2xl p-10'>
                        <h2 className='font-bold text-2xl text-center my-5'>Make Payment</h2>
                        <div className='flex flex-col gap-3'>
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button type="button" className="text-white bg-gradient-to-br cursor-pointer from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">pay</button>
                        </div>
                        <div className='flex mt-5 gap-3'>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer'>pay $10</button>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer'>pay $20</button>
                            <button className='p-3 rounded-lg bg-slate-800 cursor-pointer'>pay $30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
