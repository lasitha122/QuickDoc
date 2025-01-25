import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    
      <div className="flex flex-col items-center pt-10 mt-4" id="speciality">
        <h1 className="font-semibold md:text-2xl lg:text-3xl">
          Search <span className="text-green-500">Doctors</span>
        </h1>
        <p>Search Your Doctor and Book Appointment and get Medical Guidance</p>

        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'> 
          {specialityData.map((item, index) => (
           <Link 
           className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
           key={index} 
           to={`/FindDoctor/${item.speciality}`}
         >
           <div className='bg-white p-1 rounded-full '>
             <img src={item.image} alt={item.speciality} className='w-12 sm:w-10' />
           </div>
           <p className='text-center mt-2'>{item.speciality}</p>
         </Link>
         
          ))}
        </div>
      </div>
    
  );
};

export default SpecialityMenu;
