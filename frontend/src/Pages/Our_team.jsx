import React from 'react';
import img_1 from '../assets/our_team/lasitha.jpg';
import img_2 from '../assets/our_team/Sadhika.jpg';
import img_3 from '../assets/our_team/Sajani.jpg';
import img_4 from '../assets/our_team/Ashani.jpg';
import img_5 from '../assets/our_team/Sandali.jpg';

import { IoIosCall } from "react-icons/io";

const Members = [
    {
        id: "1",
        name: "Sajani Sivarasa",
        position: "Backend Developer",
        number: "(+94 764506867)",
        image_url: img_3,
    },
    {
        id: "2",
        name: "Lasitha Prasad",
        position: "Frontend Developer",
        number: "(+94 715686867)",
        image_url: img_1,
    },
    {
        id: "3",
        name: "Ashani Hirunika",
        position: "Frontend Developer",
        number: "(+94 773686887)",
        image_url: img_4,
    },
    {
        id: "4",
        name: "Sandali wellalage",
        position: "Backend Developer",
        number: "(+94 718906269)",
        image_url: img_5,
    },
    {
        id: "5",
        name: "Sadhika Begam",
        position: "Frontend Developer",
        number: "(+94 712506697)",
        image_url: img_2,
    },
];

function Our_team() {
    const handleButtonClick = (number) => {
        alert(`Phone Number: ${number}`);
    };

    return (
        <section id="Projects">
            <div className="text-center p-10">
                <h1 className="font-bold text-6xl mb-4 mt-16">Meet Our Team</h1>
                <p className='mt-6'>Get to know the passionate individuals behind QuickDoc, dedicated to bringing you</p>
                <p>personalized, seamless doctor appointment booking and valuable medical guidance.</p>
            </div>
            <section id="Projects" className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-10 px-4 md:px-10 lg:px-20 py-10">
                {Members.map((member) => (
                    <div key={member.id} className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src={member.image_url} alt={member.name} className="h-80 w-full object-cover rounded-t-xl" />
                            <div className="px-4 py-3">
                                <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">{member.name}</p>
                                <p className="text-lg text-center text-black cursor-auto my-2">{member.position}</p>
                                <div className="flex justify-center mt-2">
                                    <button onClick={() => handleButtonClick(member.number)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <IoIosCall /> &nbsp;&nbsp;&nbsp;Contact
                                    </button>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
        </section>
    );
}

export default Our_team;