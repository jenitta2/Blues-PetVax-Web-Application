import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/*-----Left Section-----*/}
                <div>
                    <img className='mb-5 w-48' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-justify text-gray-600 leading-6'>At Blues Pet Clinic, we’re passionate about providing exceptional care for your furry, feathered, and scaly friends. Our team of experienced veterinarians and staff is dedicated to ensuring your pets live happy, healthy, and active lives.</p>
                </div>

                {/*-----Center Section----*/}
                <div>
                    <p className='text-xl font-medium mb-5'>Blues Pet Clinic</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/*-----Right Section----*/}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 99414 00101</li>
                        <li>blues@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 Blues Pet Clinic. All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer
