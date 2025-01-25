import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header1 from '../assets/Header01.png';
import arrow_icon from '../assets/arrow_icon.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div>
      {/* Second part */}
      <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-4 md:px-10 lg:px-20 bg-green-600 mt-10 max-4 sm:mx-[10%]">
        {/* Left side - Text */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-3xl lg:text-4xl text-black font-semibold leading-tight md:leading-tight lg:leading-tight">
            QuickDoc System allows users to easily book appointments.
          </p>
          <div>
            <p>
              This system allows users to easily book appointments with doctors online and get reliable medical guidance
              from the comfort of their homes. By reducing waiting times and offering quick access to health information,
              it helps improve patient care and makes it more convenient for people to manage their health.
            </p>
          </div>
          <button
            onClick={() => navigate('/FindDoctor')} // Navigate to the FindDoctor page
            className="flex items-center gap-2 bg-white py-3 px-8 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ]"
          >
            Book Appointment
            <img className="w-3" src={arrow_icon} alt="" />
          </button>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 relative">
          <img className="w-full md:absolute bottom-0 right-0 h-auto rounded-lg" src={Header1} alt="Doctor" />
        </div>
      </div>
    </div>
  );
};

export default Header;
