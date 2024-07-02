import React, { useState } from 'react';
import { FaGreaterThan } from 'react-icons/fa6';

const gradients = [
  'linear-gradient(0deg, rgba(255, 154, 158, 0.2) 0%, rgba(254, 207, 239, 0.5) 100%)',
  'linear-gradient(0deg, rgba(241, 39, 17, 0.2) 0%, rgba(245, 175, 25, 0.5) 100%)',
  'linear-gradient(0deg, rgba(0, 198, 255, 0.2) 0%, rgba(0, 114, 255, 0.5) 100%)',
  'linear-gradient(0deg, rgba(255, 81, 47, 0.2) 0%, rgba(221, 36, 118, 0.5) 100%)',
  'linear-gradient(0deg, rgba(142, 45, 226, 0.2) 0%, rgba(74, 0, 224, 0.5) 100%)',
  'linear-gradient(0deg, rgba(29, 151, 108, 0.2) 0%, rgba(147, 249, 185, 0.5) 100%)',
  'linear-gradient(0deg, rgba(255, 117, 140, 0.2) 0%, rgba(255, 126, 179, 0.5) 100%)',
  'linear-gradient(0deg, rgba(255, 126, 95, 0.2) 0%, rgba(254, 180, 123, 0.5) 100%)',
  'linear-gradient(0deg, rgba(43, 88, 118, 0.2) 0%, rgba(78, 67, 118, 0.5) 100%)',
  'linear-gradient(0deg, rgba(33, 212, 253, 0.2) 0%, rgba(183, 33, 255, 0.5) 100%)'
];

const getRandomGradient = () => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
};

const Project = ({ title, description, logo, tags, thumbnail }) => {
  const [isHovered, setIsHovered] = useState(false);
  const randomGradient = getRandomGradient();

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md mb-3 transform transition-transform ease-in-out duration-500 hover:scale-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image (Thumbnail) */}
      <div
        className={`h-64 bg-cover bg-center relative rounded-lg overflow-hidden ${isHovered ? 'opacity-0' : ''}`}
        style={{
          backgroundImage: `${randomGradient}, url(${thumbnail})`,
          transition: 'all 1s ease-in-out'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <img src={logo} alt="Project Logo" className="w-24 h-24 mb-4 transition-opacity duration-500" style={{ opacity: isHovered ? 0 : 1 }} />
          <h2 className="text-2xl font-bold mb-2 text-shadow-lg transition-opacity duration-500" style={{ opacity: isHovered ? 0 : 1 }}>{title}</h2>
        </div>
      </div>

      {/* Hover Content */}
      <div
        className={`absolute inset-0 flex flex-col bg-gray-600  items-center justify-center text-center text-white px-6 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 1s ease-in-out' }}
      >
        <h2 className="text-2xl font-bold mb-2 text-shadow-lg transition-opacity duration-500" style={{ opacity: isHovered ? 1 : 0 }}>{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <button
        className="border-2 gap-2 text-bold flex items-center border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white text-white-500 py-2 px-4 rounded-full"
        >
        View More <FaGreaterThan className='w-2 h-2'/>
        </button>

      </div>
    </div>
  );
};

export default Project;
