import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certification = ({ thumbnail, logo, title, school, companyLink, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border-2 border-green-600 rounded-lg overflow-hidden shadow-md mb-3 transform transition-transform ease-in-out duration-500 hover:scale-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image and Gradient */}
      <div
        className={`relative h-64 bg-cover bg-center  overflow-hidden ${isHovered ? 'opacity-0' : ''}`}
        style={{
          backgroundImage: `url(${thumbnail})`,
          transition: 'all 1s ease-in-out'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-5"></div>
      </div>

      {/* Hover Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      ></div>

      {/* School Logo and Name */}
      <div
        className={`absolute ${isHovered ? 'top-0 bottom-0' : 'bottom-0'} bg-white left-0 right-0 flex items-start justify-start bg-white p-2 gap-4 transition-all duration-500 ease-in-out`}
        style={{
          transform: isHovered ? 'translateY(0%)' : 'translateY(100%)',
        }}
      >
        <img src={logo} alt="School Logo" className="w-8 h-8 2xl:h-12 2xl:w-12  rounded-full border-2 mt-2 border-blue-300" />
        <div>
          <h2 className="text-xl 2xl:text-2xl font-semibold text-gray-600">{title}</h2>
          <span className="text-xs 2xl:text-sm text-gray-400 mt-[-1px]">{school}</span>
          {isHovered && (
            <>
              <p className="text-sm 2xl:text-md text-gray-600 pt-2">{description}
                <a className="text-sm 2xl:text-md text-blue-600 hover:underline  space-x-1" href={companyLink}>
                  <span>View More</span>
                </a>
              </p>

              <div className="flex items-left gap-4 mt-10">
                <button className="bg-blue-100 text-sm text-left text-gray-600 px-4 py-2 max-w-[200px] rounded-lg flex items-center gap-2
                                   hover:bg-blue-400 hover:text-white">
                  <FaExternalLinkAlt />
                  <span className="text-xs 2xl:text-sm"> {companyLink.substring(0, 20)} </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certification;
