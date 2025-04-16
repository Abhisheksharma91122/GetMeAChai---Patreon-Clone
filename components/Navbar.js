import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white'>
      <div className='flex justify-between items-center px-4 h-16'>
        <div className="logo font-bold text-xl">GetMeAChai!</div>
        <ul className='flex gap-2'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign UP</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
