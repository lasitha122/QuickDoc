import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import account from '../assets/Createaccount.png';

const Banner = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-1 md:px-10 lg:px-20 bg-green-600 mt-10 my-20 max-4 sm:mx-[10%]">
      {/*--------------------left side -----------------*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-black">
          <p>Click here to book appointments and get expert advice from medical specialists</p>
        </div>
        <button
          onClick={() => {
            navigate('/Login'); // Navigate to the Login page
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition"
        >
          Create Account
        </button>
      </div>

      {/*--------------------right side -----------------*/}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={account}
          alt="Create Account"
        />
      </div>
    </div>
  );
};

export default Banner;
