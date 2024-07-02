import React, { useEffect } from 'react';
import { FaGraduationCap, FaCalendarAlt, FaCircle } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            institution: '20 Aout High School, Kerouchen, Khenifra',
            degree: 'Baccalaureate in Sciences Physiques',
            period: '2019-2020',
            achievements: 'Graduated with honors (Très Bien)',
            icon: FaGraduationCap,
        },
        {
            institution: 'National School of Applied Sciences, Beni Mellal',
            degree: 'Cycle Préparatoire Intégré (Preparatory Integrated Cycle)',
            period: '2020-2022',
            achievements: 'Studied Mathematics, Physics, and Computer Science',
            icon: FaGraduationCap,
        },
        {
            institution: 'National School of Applied Sciences, Beni Mellal',
            degree: 'Industrial Digital Transformations',
            period: '2022 - Present',
            achievements: 'Studying Data Science, AI, Web Development, and Software Development',
            icon: FaGraduationCap,
        },
    ];

    // Sort educationData based on the first 4 letters of period
    educationData.sort((a, b) => {
        const periodA = getSortYear(a.period);
        const periodB = getSortYear(b.period);
        return periodB - periodA;
    });

    // Function to extract and normalize period year for sorting
    function getSortYear(period) {
        const year = period.substring(0, 4);
        return parseInt(year) || 0; // Convert to integer or default to 0 if parsing fails
    }

    useEffect(() => {
        // Log sorted education data to console
        console.log("Sorted Education Data:");
        console.log(educationData);
    }, []);

    return (
        <div id="education" className="bg-white text-gray-900 rounded-lg shadow-lg mt-5 md:mt-20 pb-10">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-gray-600 max-w-2xl relative">
                Education
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-32 border-b-2 border-gray-600"></div>
            </h1>
            <div className="relative max-w-4xl mx-auto mt-20 md:mt-32 mb-20 px-6">
                <div className="border-l-4 border-gray-300 absolute h-full md:left-1/2 transform md:-translate-x-1/2"></div>
                <div className="flex flex-col items-center">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`flex w-full mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-4' : 'md:justify-start md:pl-4'}`}>
                                <div className="bg-gray-600 text-white w-4 h-4 flex items-center justify-center rounded-full absolute md:left-1/2 transform md:-translate-x-1/2 -translate-x-1 -translate-y-3">
                                    <FaCircle className="w-2 h-2" />
                                </div>
                            </div>

                            <div className={`md:w-1/2 flex md:flex-row ${index % 2 === 0 ? 'md:text-right pr-4' : 'md:text-left md:pl-20 md:pl-4'}`}>
                                <div className="flex-shrink-0 md:mr-4">
                                    <div className="bg-gray-600 mr-2 ml-6 md:mr-1 md:ml-1 text-white w-10 h-10 flex items-center justify-center rounded-full">
                                        <edu.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                                    <h3 className="text-lg 2xl:text-2xl font-semibold text-black">{edu.institution}</h3>
                                    <p className="text-yellow-600 2xl:text-lg">
                                        <FaCalendarAlt className="w-4 h-4 inline-block mr-1 -mt-1" />
                                        {edu.degree} ({edu.period})
                                    </p>
                                    <p className="text-gray-700 2xl:text-xl">{edu.achievements}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
