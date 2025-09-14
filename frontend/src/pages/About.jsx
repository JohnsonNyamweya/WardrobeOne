import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>WardrobeOne brings fashion for men, women, and kids — all sizes, all styles, all in one place. Shop with ease and pay your way: M-Pesa, Stripe, or Cash on Delivery.</p>
          <p>From everyday wear to standout pieces, we make shopping simple, secure, and fun. With a wide variety of quality outfits and an easy-to-use platform, WardrobeOne is here to fit your style and your lifestyle.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At WardrobeOne, our mission is to make fashion accessible, inclusive, and convenient for everyone. We aim to bring quality clothing for men, women, and kids together in one platform, offering styles for every size and every occasion.</p>
          <p>By combining simplicity, affordability, and secure payments, we are redefining how people shop — ensuring that every wardrobe tells a story of confidence, comfort, and style.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>Every piece at WardrobeOne is handpicked for style, comfort, and durability — giving you fashion that looks good, feels good, and lasts.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-700'>Shop anytime, anywhere with WardrobeOne. Easy browsing, smooth checkout, and multiple payment options — fashion made simple.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-700'>At WardrobeOne, our customers come first. From quick support to hassle-free returns, we’re here to make your shopping experience smooth, friendly, and worry-free.</p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>
  )
}

export default About