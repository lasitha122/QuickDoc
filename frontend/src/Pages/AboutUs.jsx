import React from 'react'
import { assets } from '../assets/assets'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-#000000'>
        <p>ABOUT <span className='text-black font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 sm:mx-[10%]'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to QuickDoc , your trusted partner in managing your healthcare needs conveniently and efficiently. At QuickDoc, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>QuickDoc is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at QuickDoc is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4 sm:mx-[10%]'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 sm:mx-[10%]'>
        <div className='border px-10 md:px-16 py-4 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

      <Link to="/our_team">
        <button className="mt-8 bg-black text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded sm:mx-[10%] mb-10">
          Meet Our Developer Team
        </button>
      </Link>

    </div>
  )
}

export default About
