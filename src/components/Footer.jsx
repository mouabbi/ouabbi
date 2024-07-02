import React from 'react';
import {  FaTwitter, FaLinkedin, FaGithub, FaAngleDoubleUp, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import {  } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-700 px-5 text-white py-8 mt-[-10px]">
      <div className=" relative container mx-auto text-center">
        <div
          className="absolute top-[-100px] left-0 right-0  text-white"
        >
            <button onClick={scrollToTop} className='bg-blue-500 '>
            <FaAngleDoubleUp className='w-12 h-12 2xl:w-20 2xl:h-20'/>
            </button>
        </div>
        <p className="text-lg max-w-xs md:text-2xl 2xl:text-3xl md:max-w-sm 2xl:max-w-lg 2xl:pt-10 mx-auto my-10">
            "Living, learning, & leveling up one day at a time."
        </p>
        <div className="flex justify-center space-x-3 mb-4 py-10">
          <a href="https://www.linkedin.com/in/mahamed-ouabbi/" 
              className="border-2 border-white p-2 logo 2xl:p-3 rounded-full 
              hover:text-gray-800 hover:bg-white">
            <FaLinkedin  className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10' />
          </a>
          <a href="https://github.com/mouabbi" className="border-2 border-white p-2 logo 2xl:p-3 rounded-full 
                                                        hover:text-gray-800 hover:bg-white">
            <FaGithub size={24} className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10'/>
          </a>
          <a href="https://www.youtube.com" className="border-2 border-white p-2 logo 2xl:p-3 rounded-full 
                                                        hover:text-gray-800 hover:bg-white">
            <FaYoutube size={24} className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10'/>
          </a>
          <a href="https://web.facebook.com/mohammed.ouaabbi/" className="border-2 border-white p-2 logo 2xl:p-3  rounded-full 
                                                        hover:text-gray-800 hover:bg-white">
            <FaFacebookF size={24} className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10'/>
          </a>
          <a href="https://www.twitter.com" className="border-2 border-white p-2 logo 2xl:p-3 rounded-full 
                                                        hover:text-gray-800 hover:bg-white">
            <FaTwitter size={24} className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10'/>
          </a>
          <a href="https://www.instagram.com" className="border-2 border-white p-2 2xl:p-3  rounded-full 
                                                        hover:text-gray-800 hover:bg-white">
            <FaInstagram size={24} className='w-5 h-5 md:w-6 md:h-6 2xl:w-10 2xl:h-10'/>
          </a>
          
        </div>
        <p className="text-sm text-red-300 2xl:text-lg ">&copy; {new Date().getFullYear()} Handcrafted by me.</p>
      </div>
    </footer>
  );
};

export default Footer;
