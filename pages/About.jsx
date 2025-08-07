import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='y-10 flex flex-col md:flex-row gap-12'>
        <img className=' md:max-2-[160px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At Blues Pet Clinic, we’re passionate about providing exceptional care for your furry, feathered, and scaly friends. Our team of experienced veterinarians and staff is dedicated to ensuring your pets live happy, healthy, and active lives.We perform the following:</p>
          <p className='font-bold'>State-of-the-Art Facilities<br /></p>
          <p>✔ Experienced and Compassionate Team</p>
          <p>✔ Affordable and Transparent Pricing</p>
          <p>✔Emergency Services Available</p>
          <p>✔ Convenient Appointments</p>
          <p>Your pet’s health and happiness are our top priorities!</p>

          <p className='text-gray-800 font-semibold'>Our Vision</p>
          <p>🐾 Comprehensive Health Exams <br />
            🐾 Vaccinations & Preventive Care<br />
            🐾 Diagnostics & Lab Services<br />
            🐾 Dental Care for Pets<br />
            🐾 Surgery & Emergency Care<br />
            🐾 Grooming & Wellness Programs<br />
            We offer personalized care tailored to meet your pet’s unique needs
          </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Us?</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gpa-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Experienced Doctors</b>
          <p>Doctors at Blues Pet Clinic hold 10 plus years experience in treating
            pet animals like dogs, cats and birds. Their experience will speak louder
            in their work.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gpa-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>We have proper setup to treat pets and to accomdate them without
            frightening them by handling them ruder.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gpa-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>All in one place</b>
          <p>You can purchase all your pet needs like food,snacks,leashes in
            our clinic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
