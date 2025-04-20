// "use client"
import Paymentpage from '@/components/Paymentpage';
import React from 'react'

const Username = async({ params }) => {

  const {username} = await params;

  return (
    <>
      <Paymentpage username={username} />
    </>
  )
}

export default Username
