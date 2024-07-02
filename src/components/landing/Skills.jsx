import React from 'react';
import { 
  FaCode, 
  FaChartBar, 
  FaToolbox, 
  FaChartLine, 
  FaBrain, 
  FaLaptopCode,
  FaCogs,
  
} from 'react-icons/fa';
import Skill from './Skill';
import statistical from "../../images/skills/icons8-graph-48.png"
import datavisualization from "../../images/skills/icons8-bar-chart-48.png"
import sql from "../../images/skills/icons8-mysql-48.png"
import python from "../../images/skills/icons8-python-48.png"
import excel from "../../images/skills/icons8-excel-48.png"
import powerbi from "../../images/skills/icons8-power-bi-48.png"
import notebook from "../../images/skills/icons8-spiral-bound-booklet-48.png"
import datapreprocessing from "../../images/skills/icons8-data-quality-48.png"
import algo from "../../images/skills/icons8-machine-learning-48.png"
import tensorflow from "../../images/skills/tensorflow-icon-1911x2048-1m2s54vn.png"
import pytorch from "../../images/skills/icons8-pytorch-48.png"
import sklearn from "../../images/skills/1280px-Scikit_learn_logo_small.svg.png"
import keras from "../../images/skills/1200px-Keras_logo.svg.png"
import html from "../../images/skills/icons8-html-48.png"
import css from "../../images/skills/icons8-css-48.png"
import js from "../../images/skills/icons8-js-48.png"
import php from "../../images/skills/icons8-php-logo-30.png"
import mysql from "../../images/skills/icons8-mysql-48.png"
import mongo from "../../images/skills/icons8-mongo-db-48.png"
import react from "../../images/skills/icons8-react-native-48.png"
import express from "../../images/skills/icons8-express-js-48.png"
import bootstrap from "../../images/skills/icons8-bootstrap-48.png"
import node from "../../images/skills/icons8-nodejs-48.png"
import django from "../../images/skills/icons8-django-48.png"
import pandas from "../../images/skills/icons8-pandas-48.png"
import numpy from "../../images/skills/icons8-numpy-48.png"
import matplotlib from "../../images/skills/matplot.jpeg"
import feature_eng from "../../images/skills/feature.png"
import datapre from "../../images/skills/preproc.png"
import superlearn from "../../images/skills/superlearn.png"
import unsuperlearn from "../../images/skills/unsupervised-learning-3901037-3232318.png"
import dl from "../../images/skills/يم.png"
import modelev from "../../images/skills/mevo.png"
import computerv from "../../images/skills/computer-vision-512.webp"
import opencv from "../../images/skills/opencv.png"
import yolo from "../../images/skills/yolo.svg"

const skillsData = [
  {
    icon: FaChartLine,
    color: "#FCD34D",
    title: "Data Analyst",
    content: "I specialize in leveraging data analysis to uncover insights and inform strategic decision-making",
    lists: [
      {
        icon: FaChartBar,
        title: "Skills:",
        items: [
          { name: 'Statistical Analysis', image: statistical },
          { name: 'Data Visualization', image: datavisualization },
          { name: 'SQL', image: sql },
          { name: 'Python', image: python },
          { name: 'Data Cleaning', image: datapreprocessing }
        ]
      },
      {
        icon: FaToolbox,
        title: "Tools/Frameworks:",
        items: [
          
          { name: 'Power BI', image: powerbi },
          { name: 'Pandas', image: pandas },
          { name: 'numpy', image: numpy },
          { name: 'Jupyter Notebook', image: notebook },
          { name: 'Excel', image: excel },
          {name:'Matplotlib',image:matplotlib}
        ]
      }
    ]
  },
  {
    icon: FaBrain,
    color: "#fc9999",
    title: "Machine Learning/IA",
    content: "I specialize in developing sophisticated models and algorithms for data analysis and predictive analytics",
    lists: [
      {
        icon: FaCode,
        title: "Skills:",
        items: [
          { name: 'Data Preprocessing', image: datapre },
          {name:"Algorithm",image:algo},
          { name: 'Feature Engineering', image: feature_eng },
          { name: 'Supervised Learning', image: superlearn },
          { name: 'Unsupervised Learning', image: unsuperlearn },
          { name: 'Deep Learning', image: dl },
          { name: 'Model Evaluation', image: modelev },
          { name: 'Computer Vision', image: computerv }
        ]
      },
      {
        icon: FaCogs,
        title: "Frameworks & Tools:",
        items: [
          { name: 'TensorFlow', image: tensorflow },
          { name: 'PyTorch', image: pytorch },
          { name: 'Scikit-learn', image: sklearn },
          { name: 'Keras', image: keras },
          { name: 'Python', image: python },
          { name: 'Pandas', image: pandas },
          { name: 'Opencv', image: opencv },
          { name: 'YOLOv8', image: yolo },
        ]
      }
    ]
  },
  {
    icon: FaLaptopCode,
    color: "#90b6f4",
    title: "Full Stack Developer",
    content: "I specialize in full-stack development, proficient in both frontend and backend technologies to deliver robust and responsive web applications.",
    lists: [
      {
        icon: FaCode,
        title: "Programming Languages:",
        items: [
          { name: 'HTML', image: html },
          { name: 'CSS', image: css },
          { name: 'JavaScript', image: js },
          { name: 'php', image: php },
          {name:"python" , image:python}
        ]
      },
      {
        icon: FaToolbox,
        title: "Frameworks & Tools:",
        items: [
          { name: 'React', image: react },
          { name: 'Bootstrap', image: bootstrap },
          { name: 'Node.js', image: node },
          { name: 'Express.js', image: express },
          { name: 'Django', image: django },
          {name:'Mongo DB',image:mongo},
          {name:"MySQL" , image:mysql}
        ]
      },
    ]
  }
];



function Skills() {
  
  return (
    <>
    <div className="bg-gray-600 text-gray-900 rounded-lg shadow-lg pb-40">
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-white max-w-2xl relative">
        Skills
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 border-b-2 border-white-600"></div>
      </h1>
    </div>
    <div className=" mt-[-100px]">
    <div className=" bg-white  m-auto rounded-lg 2xl:max-w-10xl
                     max-w-6xl gap-6 grid gap-6 md:grid-cols-2  2xl:grid-cols-2">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className={` p-10 w-full  px-4 mb-2 md:mb-4  border-b border-b-2 md:border-b-0
                     ${index % 2 === 0 ? ' md:border-r border-gray-300 border-opacity-50' : ''}`}
        >
          <Skill
            icon={skill.icon}
            color={skill.color}
            title={skill.title}
            content={skill.content}
            lists={skill.lists}
          />
        </div>
      ))}
    </div>
  </div>
  </>
  );
}

export default Skills;
