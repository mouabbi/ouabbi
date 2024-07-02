import React, { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Header from '../components/Header';
import Hero from '../components/landing/Hero';
import AboutMe from '../components/landing/AboutMe';
import Education from '../components/landing/Education';
import Skills from '../components/landing/Skills';
import ExperienceSection from '../components/landing/ExperienceSection';
import Projects from '../components/landing/Projects';
import Certifications from '../components/landing/Certifications';
import ContactForm from '../components/landing/ContactForm';
import Footer from '../components/Footer';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const LandingPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log('ScrollY:', window.scrollY);
      if (window.scrollY > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <Hero />
      <AboutMe />
      <ExperienceSection />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <ContactForm />
      <Footer />
      <div className="fixed bottom-4 right-4 text-white">
        <button onClick={scrollToTop} className={`${showButton?'  ':'hidden'} bg-blue-500 p-2 rounded-full`}>
          <FaAngleDoubleUp className="w-8 h-8 md:w-12 md:h-12 2xl:w-20 2xl:h-20" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
