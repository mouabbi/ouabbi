/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-4 md:px-40 py-4 border-b ${
        isFixed ? 'fixed top-0 left-0 right-0 bg-white shadow-lg z-50' : ''
      }`}
    >
      <h1 className="text-sm md:text-lg font-bold 2xl:text-xl">OUABBI</h1>
      <button className="lg:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav className="hidden lg:flex space-x-8">
        <a href="#hero" className="text-blue-600 font-bold border-b-2 border-blue-600 2xl:text-xl">
          Home
        </a>
        <a href="#about" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          About
        </a>
        <a href="#experience" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          Experience
        </a>
        <a href="#education" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          Education
        </a>
        <a href="#projects" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          Projects
        </a>
        <a href="#certifications" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          Certifications
        </a>
        <a href="#contact" className="text-gray-600 font-bold hover:text-blue-600 2xl:text-xl">
          Contact
        </a>
      </nav>
      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#hero" className="text-blue-600 font-bold ">
              Home
            </a>
            <a href="#about" className="text-gray-600 font-bold hover:text-blue-600">
              About
            </a>
            <a href="#experience" className="text-gray-600 font-bold hover:text-blue-600">
              Experience
            </a>
            <a href="#education" className="text-gray-600 font-bold hover:text-blue-600">
              Education
            </a>
            <a href="#projects" className="text-gray-600 font-bold hover:text-blue-600">
              Projects
            </a>
            <a href="#certifications" className="text-gray-600 font-bold hover:text-blue-600">
              Certifications
            </a>
            <a href="#contact" className="text-gray-600 font-bold hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
