import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
    const { docId } = useParams();
    const { doctors, currencySymbol } = useContext(AppContext);
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const navigate = useNavigate(); // Initialize navigate

    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(-1); // No slot selected by default
    const [slotTime, setSlotTime] = useState('');

    const fetchDocInfo = async () => {
        const docInfo = doctors.find((doc) => doc._id === docId);
        setDocInfo(docInfo);
    };

    const getAvailableSlots = async () => {
        setDocSlots([]); // Reset slots before fetching new ones

        // Getting current date
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            // Getting date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            // Setting end time of the date with index
            let endTime = new Date(today);
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // Setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                // Add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime,
                });

                // Increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots((prev) => [...prev, timeSlots]);
        }
    };

    const bookAppointment = async () => {
        if (slotIndex === -1 || !docSlots[slotIndex] || !docSlots[slotIndex][0]) return;

        // Redirect to login page
        navigate('/login');
    };

    useEffect(() => {
        if (doctors.length > 0) {
            fetchDocInfo();
        }
    }, [doctors, docId]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);

    return docInfo ? (
        <div>
            {/* ---------- Doctor Details ----------- */}
            <div className='flex flex-col sm:flex-row gap-4 sm:mx-[10%] mt-10'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>

                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                    {/* ----- Doc Info : name, degree, experience ----- */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {docInfo.name}
                        <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    {/* ----- Doc About ----- */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
                            About <img className='w-3' src={assets.info_icon} alt="" />
                        </p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-4'>
                        Appointment fee: <span className='text-gray-600'> {currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* Booking slots */}
            <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 sm:mx-[10%]'>
                {docSlots.length > 0 &&
                    docSlots.map((daySlots, dayIndex) => (
                        <div
                            key={dayIndex}
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                                slotIndex === dayIndex ? 'bg-primary text-white' : ''
                            }`}
                            onClick={() => setSlotIndex(dayIndex)}
                        >
                            <p>{daysOfWeek[daySlots[0]?.datetime?.getDay()]}</p>
                            <p>{daySlots[0]?.datetime?.getDate()}</p>
                        </div>
                    ))}
            </div>

            {slotIndex !== -1 && (
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4 sm:mx-[10%]'>
                    {docSlots[slotIndex]?.map((item, index) => (
                        <p
                            onClick={() => setSlotTime(item.time)}
                            key={index}
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                                item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'
                            }`}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
            )}

            <button
                onClick={bookAppointment}
                className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 sm:mx-[10%]'
            >
                Book an appointment
            </button>

            {/* Listing Related Doctors */}
            <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
        </div>
    ) : null;
};

export default Appointment;
