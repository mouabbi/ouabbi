import React from 'react';
import Certification from './Certification';
import freecode from "../../images/scolls/fcc_secondary_small.svg";
import ms from "../../images/scolls/Microsoft_logo.svg.png";
import datacamp from "../../images/scolls/images.png";
import datas from "../../images/certifications/dataana.jpg";
import sql from "../../images/certifications/sql.jpg";
import wordpress from "../../images/certifications/wordpress.jpg";
import problem from "../../images/certifications/problem.jpg";
import hacker from "../../images/certifications/hacker.png";
import tera from "../../images/certifications/teracourse.jpg"

const certificationsData = [
    {
        thumbnail: datas,
        logo: freecode,
        title: 'Data Analysis with Python',
        school: 'FreeCodeCamp',
        description: 'Learn to analyze data effectively using Python.',
        companyLink: 'https://example.com/data-analysis'
    },
    {
        thumbnail: problem,
        logo: hacker,
        title: 'Problem Solving',
        school: 'HackerRank',
        description: 'Enhance problem-solving skills with HackerRank challenges.',
        companyLink: 'https://example.com/problem-solving'
    },
    {
        thumbnail: sql,
        logo: datacamp,
        title: 'SQL Introduction',
        school: 'DataCamp',
        description: 'Introduction to SQL fundamentals for data analysis.',
        companyLink: 'https://example.com/sql-introduction'
    },
    {
        thumbnail: wordpress,
        logo: tera,
        title: 'WordPress Administration',
        school: 'Microsoft',
        description: 'Learn WordPress administration and content management.',
        companyLink: 'https://example.com/wordpress-administration'
    }
    // Add more certification objects as needed
];

export default function Certifications() {
    return (
        <div id="certifications" className="bg-white text-gray-900 rounded-lg shadow-lg mt-5 md:mt-20 pb-10">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-gray-600 max-w-2xl relative">
                Certifications
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-32 border-b-2 border-gray-600"></div>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8 px-6">
                {certificationsData.map((certification, index) => (
                    <Certification
                        key={index}
                        thumbnail={certification.thumbnail}
                        logo={certification.logo}
                        title={certification.title}
                        school={certification.school}
                        description={certification.description}
                        companyLink={certification.companyLink}
                    />
                ))}
            </div>
        </div>
    );
}
