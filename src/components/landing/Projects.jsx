import React from 'react';
import Project from './Project';
import p_thumb from "../../images/pojects/pfa/thumbnail.jpg"
import p_logo from "../../images/pojects/pfa/logo-removebg-preview.png"

import p1_thumb from "../../images/pojects/amuramanga/p_thumb.png"
import p1_logo from "../../images/pojects/amuramanga/p_logo.png"

import p2_thumb from "../../images/pojects/ecommerce/p_thumbn.png"
import p2_logo from "../../images/pojects/ecommerce/p_logo-removebg-preview.png"

import p3_thumb from "../../images/pojects/chat_app/thumbn.png"
import p3_logo from "../../images/pojects/chat_app/logo.png"
function Projects() {// Example projects data
    
    const projects = [
      {
        title: "Arabic OCR System",
        description: "Created an Arabic OCR system based on Hanjie Nonogram using machine learning techniques.",
        tags: ["ML", "YOLO", "Python", "Nanogram", "Pyqte", "OCR"],
        logo: p_logo,
        thumbnail: p_thumb,
    },
    {
      title: "Arabic Manga Website",
      description: "Built a website for Arabic manga using PHP & MYSQL",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      logo: p1_logo,
      thumbnail: p1_thumb,  },
      {
        title:"Ecommerce Website Development",
        description :"Full-Stack Ecommerce App Development (Web & Admin) , using PHP & MYSQL",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        logo:p2_logo,
        thumbnail:p2_thumb
      },
      {
        title:"React Chat Application",
        description :"Full-Stack React Chat Application with Firebase Integration",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        logo:p3_logo,
        thumbnail:p3_thumb
      }
      ];
  
    return (
      <div id="projects" className="text-gray-900 rounded-lg shadow-lg pb-40">
        <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-gray-600 max-w-2xl relative">
          Projects
          <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 border-b-2 border-gray-600"></div>
        </h1>
  
        <div className="relative my-10 px-5 md:mt-20 md:px-20 grid gap-6 
                        md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {projects.map((project, index) => (
            <div key={index}>
              <Project
              title={project.title}
              description={project.description}
              logo={project.logo}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;