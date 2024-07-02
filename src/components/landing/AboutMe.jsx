import React, { useRef, useEffect } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import image from '../../images/user2.png';

const AboutMe = () => {
    const canvasRef = useRef(null);
    const stars = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            width = canvas.width;
            height = canvas.height;
            initStars();
        };

        const Star = function (x, y, radius, color, speedX, speedY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
        };

        const initStars = () => {
            stars.current = [];
            const starColors = ['#ffffff']; // White color for stars
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const radius = Math.random() * 2;
                const color = starColors[Math.floor(Math.random() * starColors.length)];
                const speedX = (Math.random() - 0.5) * 0.2; // Random X speed
                const speedY = (Math.random() - 0.5) * 0.2; // Random Y speed
                stars.current.push(new Star(x, y, radius, color, speedX, speedY));
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, width, height);
            stars.current.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.fill();

                // Move stars
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around edges
                if (star.x > width) {
                    star.x = 0;
                } else if (star.x < 0) {
                    star.x = width;
                }
                if (star.y > height) {
                    star.y = 0;
                } else if (star.y < 0) {
                    star.y = height;
                }
            });
        };

        const animateStars = () => {
            drawStars();
            requestAnimationFrame(animateStars);
        };

        resizeCanvas();
        animateStars();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div id="about" className="bg-gray-600 text-gray-900 rounded-lg shadow-lg mt-20 pb-40 relative">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-white max-w-2xl relative">
                About Me
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-32 border-b-2 border-white-600"></div>
            </h1>
            <div className="flex flex-col md:flex-row max-w-4xl 2xl:max-w-6xl mx-auto mt-5 md:mt-20">
                <div className="hidden md:block w-48 h-48 overflow-hidden rounded-lg bg-blue-600 md:min-w-72 md:h-72">
                    <img src={image} alt="Profile" className="object-cover w-full h-full" />
                </div>
                <div className="p-8 items-center md:items-start md:pl-16 flex flex-col justify-between relative">
                    <div>
                        <h1 className="text-xl md:text-3xl font-bold text-left mb-4 text-white max-w-xl">
                            Hi, I’m Mohamed. Nice to meet you.
                        </h1>
                        <p className="mt-4 text-center md:text-left leading-relaxed text-gray-300 2xl:text-2xl">
                            I'm an engineering student specializing in industrial digital transformations at the National School of Applied Sciences of Beni Mellal in Morocco. My expertise includes data analysis, data science, AI, deep learning, computer vision, and new technologies aimed at enhancing the industry and the world. I am also proficient in web and mobile development, continually seeking to innovate and expand my skill set.
                        </p>
                    </div>
                    <div className="mt-8">
                        <a href="/files/Mohamed_OUABBI.pdf" download="cv.pdf">
                            <button className="2xl:text-xl border-2 gap-2 text-bold text-white flex items-center border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 rounded-lg">
                                <FaFileDownload className="w-4 h-4 inline-block mr-2 mt-1" /> Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
