import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white'>
      <div className='flex justify-between items-center px-4 h-16'>
        <div>
          <Link href={'/'}>
          <div className='logo font-bold text-xl flex justify-center items-center'>
          <img src="/tea.gif" alt="tea img" width={44} />
          <span>GetMeAChai!</span>
          </div>
          </Link>
        </div>
        {/* <ul className='flex gap-2'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Sign UP</li>
          <li>Login</li>
        </ul> */}

        <div>
          <Link href={"/login"}>
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            >Login</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
