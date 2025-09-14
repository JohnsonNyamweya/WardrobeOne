import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets.js'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact image" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-700'>Our Store</p>
          <p className='text-gray-600'>1001 WardrobeOne <br/> Suite 1010, Nairobi, Kenya</p>
          <p className='text-gray-600'>Tel: (+254) 7032-32100 <br /> Email: admin@wardrobeone.com</p>
          <p className='font-semibold text-xl text-gray-700'>Careers at WardrobeOne</p>
          <p className='text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact