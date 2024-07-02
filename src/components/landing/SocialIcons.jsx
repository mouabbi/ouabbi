/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-center mt-4 space-x-4 md:justify-start">
      <a href="https://www.linkedin.com/in/mahamed-ouabbi/" className="text-gray-800 border-2 border-gray-800 p-1 rounded-lg hover:text-black
                             hover:bg-gray-800 hover:text-white">
        <FaLinkedin className="w-4 h-4 2xl:w-8 2xl:h-8" />
      </a>
      <a href="https://github.com/mouabbi" className="text-gray-800 border-2 border-gray-800 p-1 rounded-lg hover:text-black
                             hover:bg-gray-800 hover:text-white">
        <FaGithub className="w-4 h-4 2xl:w-8 2xl:h-8" />
      </a>
      <a href="https://web.facebook.com/mohammed.ouaabbi/" className="text-gray-800 border-2 border-gray-800 p-1 rounded-lg hover:text-black
                             hover:bg-gray-800 hover:text-white">
        <FaFacebook className="w-4 h-4 2xl:w-8 2xl:h-8" />
      </a>
    </div>
  );
};

export default SocialIcons;