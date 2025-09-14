import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <p className='text-xl font-medium mb-5'>WARDROBE<span className='text-yellow-600'>ONE</span></p>
                <p className='w-full md:w-2/3 text-gray-600'>From timeless classics to the latest arrivals.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+254711223344</li>
                    <li>contact@wardrobeone.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ wardrobeone.com. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer