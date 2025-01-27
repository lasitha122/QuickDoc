import React, { useContext, useEffect, useState } from 'react'; // Added useState here
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate if needed for navigation
import { AppContext } from '../Context/AppContext';

const FindDoctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate(); // Needed for navigation to appointments
  const [filterDoc, setFilterDoc] = useState([]); // Now useState is correctly defined

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]); // Fixed dependency to include 'speciality'

  return (
    <div>
      <p className='text-gray-500 mt-5 ml-5'>Browse through doctors specialist</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5 ml-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
        <p onClick ={()=> speciality ==='General physician' ? navigate('/FindDoctor'): navigate('/FindDoctor/General physician')}  className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-green-300 text-black" : "" }`}>
  General physician
      </p>
      <p onClick ={()=> speciality ==='Gynocologist' ? navigate('/FindDoctor'):navigate('/FindDoctor/Gynecologist')} className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-green-300 text-black" :"" }`}>
  Gynecologist
    </p>
    <p onClick ={()=> speciality ==='Dermatologist' ? navigate('/FindDoctor'):navigate('/FindDoctor/Dermatologist')} className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-green-300 text-black" :"" }`}>
  Dermatologist
    </p>
    <p onClick ={()=> speciality ==='Pediatricians' ? navigate('/FindDoctor'):navigate('/FindDoctor/Pediatricians')} className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-green-300 text-black" :"" }`}>
    Pediatricians
  </p>
  <p onClick ={()=> speciality ==='Neurologist' ? navigate('/FindDoctor'):navigate('/FindDoctor/Neurologist')} className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-green-300 text-black" :"" }`}>
  Neurologist
</p>
<p onClick={()=> speciality ==='Gastroenterologist' ? navigate('/FindDoctor'):navigate('/FindDoctor/Gastroenterologist')} className={`w-[250px] sm:w-[250px] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-green-300 text-black" :"" }`}>
Gastroenterologist
</p>

</div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 mr-5'>
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-green-100" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <p className="w-2 h-2 bg-green-400 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-900 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
