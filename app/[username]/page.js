// "use client"
import Paymentpage from '@/components/Paymentpage';
import React from 'react'
import NotFound from '../not-found';
import connectDB from '@/models/db';
import User from '@/models/User';
import { notFound } from 'next/navigation';

const Username = async({ params }) => {

  const {username} = await params;
  const checkUser = async() => {
    connectDB();
    let u = await User.findOne({username: username})
    if(!u){
      return notFound();
    }
  }
  await checkUser();

  return (
    <>
      <Paymentpage username={username} />
    </>
  )
}

export default Username

export async function generateMetadata({ params }) {
  // read route params
  const { username } = await params

  return {
    title: `Support ${username} - Get Me A Chai`
  }
}