import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <div>
            <h1 className='text-xl font-bold tracking-tight'>Wardrobe<span className='text-yellow-500'>One</span></h1>
        <p className='text-xl font-semibold tracking-tight'>ADMIN PANEL</p>
        </div>
        <button onClick={() => setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar