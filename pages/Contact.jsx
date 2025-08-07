import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-26 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-lg text-gray-600'>ADDRESS</p>
          <p className='text-gray-500'>Nagercoil- Trivandrum NH Pulippanam, opp. to CSI Church,
            near Marthandam, Kattathurai, Tamil Nadu 629158</p>
          <p className='text-gray-500 font-semibold'>Contact Number: +91 99414 00101</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
