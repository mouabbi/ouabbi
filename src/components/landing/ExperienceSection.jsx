import React from 'react';
import Experience from './Experience'; // Replace with the path to your Experience component
import usms from "../../images/exp/usms.png";

const ExperienceSection = () => {

  const experienceData = [
    {
        company: 'UNIVERSITY SULTAN MOULAY SLIMANE',
        jobTitle: 'ERP Developer Intern - Odoo',
        jobType: 'Internship',
        startDate: 'July 2023',
        endDate: 'August 2023',
        description: '- Developed a web application using Odoo for managing scientific article ,\n - digitizing paper forms into a digital web app.',
        skills: ['Odoo', 'XML', 'Python', 'HTML', 'CSS', 'ERP', 'Project Management'],
        image: usms, // Replace with your image file
    },
  ];

  return (
    <div id="experience" className=" mt-[-120px] relative z-index-999 bg-white text-gray-900 rounded-lg max-w-6xl m-auto shadow-lg mt-20 pb-10">
      
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-gray-600 max-w-2xl relative">
        Experience
        <div className="absolute  bottom-[-8px] left-1/2 transform -translate-x-1/2 w-32 border-b-2 border-gray-600"></div>
      </h1>

      <div className="max-w-5xl mx-10 mt-10">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <Experience
              company={exp.company}
              jobTitle={exp.jobTitle}
              jobType={exp.jobType}
              startDate={exp.startDate}
              endDate={exp.endDate}
              description={exp.description}
              skills={exp.skills}
              image={exp.image}
            />
            {index !== experienceData.length - 1 && <div className="border-b border-gray-300 mb-6"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
