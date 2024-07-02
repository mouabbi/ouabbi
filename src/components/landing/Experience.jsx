import React from 'react';
import Image from './Image'; // Replace with the path to your Image component
import { FaBriefcase, FaTools } from 'react-icons/fa';

const Experience = ({ company, jobTitle, jobType, startDate, endDate, description, skills, image }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center mb-8 pt-4">
    <div className="md:w-1/5 flex justify-center mb-4 md:mb-0">
      <div className="w-24 h-24 md:w-32 md:h-32  2xl:w-48 2xl:h-48 overflow-hidden rounded-lg bg-gray-200">
        <Image src={image} alt={`${company} Thumbnail`} className="object-cover w-full h-full" />
      </div>
    </div>
    <div className="md:w-4/5 md:pl-8">
      <div className="flex items-center mb-1">
        <FaBriefcase className="w-4 h-4 mr-1 text-gray-700" />
        <h2 className="text-lg 2xl:text-2xl font-semibold">{company}</h2>
      </div>
      <div className="flex items-center ">
        <p className="text-sm 2xl:text-lg text-green-700 font-semibold mr-2 ">{jobTitle}</p> 
        <p className="text-sm 2xl:text-lg text-gray-500">. {jobType}</p>
      </div>
      <p className="text-sm 2xl:text-lg text-gray-500 mb-2">{startDate} - {endDate}</p>
      {description.split('\n').map((item, index) => (
                <p key={index} className="text-sm 2xl:text-lg text-gray-700 mb-1">{item.trim()}</p>
            ))}
      <div className="flex flex-wrap items-center mt-5">
        <div className="flex items-center mr-4 mx-2">
          <FaTools className="w-3 h-3 mr-1 text-dark-700" />
          <p className="text-xs 2xl:text-sm text-dark-600 font-semibold">Skills:</p>
        </div>
        <div className="flex flex-wrap">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-gray-200 2xl:text-sm text-gray-700 rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-2">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
