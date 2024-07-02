import React, { useRef, useEffect } from 'react';
import SocialIcons from './SocialIcons';
import image from '../../images/mf-avatar.svg';

const Hero = () => {
  const canvasRef = useRef(null);
  const cursorHistory = useRef([]);
  const starsAroundCursor = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];
    let planets = [];
    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = canvas.width;
      height = canvas.height;
      initStars();
      initPlanets();
    };

    const Star = function (x, y, radius, color, speed) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.speed = speed;
    };

    const initStars = () => {
      stars = [];
      const starColors = ['rgb(120,200,100)', 'rgb(140,20,100,0.3)', 'rgb(255,200,100)'];
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 2;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const speed = Math.random() * 0.2 + 0.1;
        stars.push(new Star(x, y, radius, color, speed));
      }
    };

    const drawStars = () => {
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        // Move stars
        star.x += star.speed;
        if (star.x > width) {
          star.x = 0;
        }
        if (star.y > height) {
          star.y = 0;
        }
      });
    };

    const Planet = function (x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
      this.direction = Math.random() * Math.PI * 2;
    };

    const initPlanets = () => {
      planets = [];
      const planetColors = ['#4169e1', '#ffd700','#ff99ff'];
      for (let i = 0; i <3; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 20 + 10;
        const color = planetColors[Math.floor(Math.random() * planetColors.length)];
        const velocity = Math.random()*2 + 1;
        planets.push(new Planet(x, y, radius, color, velocity));
      }
    };

    const drawPlanets = () => {
      planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();

        // Move planets
        const velocityX = Math.cos(planet.direction) * planet.velocity;
        const velocityY = Math.sin(planet.direction) * planet.velocity;
        planet.x += velocityX;
        planet.y += velocityY;

        // Wrap around edges
        if (planet.x - planet.radius > width) {
          planet.x = -planet.radius;
        } else if (planet.x + planet.radius < 0) {
          planet.x = width + planet.radius;
        }
        if (planet.y - planet.radius > height) {
          planet.y = -planet.radius;
        } else if (planet.y + planet.radius < 0) {
          planet.y = height + planet.radius;
        }
      });
    };

    const drawCursorTrail = () => {
      if (cursorHistory.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(cursorHistory.current[0].x, cursorHistory.current[0].y);
        for (let i = 1; i < cursorHistory.current.length; i++) {
          const point = cursorHistory.current[i];
          ctx.lineTo(point.x, point.y);
        }
        ctx.strokeStyle = 'rgba(29,200,200,0.5)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const drawStarsAroundCursor = () => {
      starsAroundCursor.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        // Fade out stars
        star.radius -= 0.05;
        if (star.radius <= 0) {
          starsAroundCursor.current = starsAroundCursor.current.filter(s => s !== star);
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw stars
      drawStars();

      // Draw planets
      drawPlanets();

      // Draw cursor trail
      drawCursorTrail();

      // Draw stars around cursor
      drawStarsAroundCursor();

      requestAnimationFrame(animate);
    };

    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add current mouse position to history
      cursorHistory.current.push({ x: mouseX, y: mouseY });

      // Keep only the last 50 points in history
      if (cursorHistory.current.length > 50) {
        cursorHistory.current.shift();
      }

      // Add stars around the cursor
      const starColors = ['#4169e1', '#f50','#ff99ff'];
      for (let i = 0; i < 15; i++) {
        const x = mouseX + Math.random() * 100 ;
        const y = mouseY + Math.random() * 100 ;
        const radius = Math.random() * 2 + 1;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        starsAroundCursor.current.push(new Star(x, y, radius, color));
      }
    };

    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <main id="hero" className="relative flex flex-col md:flex-row Justify-center md:py-20 lg:max-w-4xl   xl:max-w-6xl mx-auto">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      <div className="relative md:p-10 text-center m-auto md:text-left px-auto  ">
        <h2 className="font-bold leading-loose">
          <span className="md:text-3xl 2xl:text-5xl text-2xl">Hi,</span>
          <br />
          <span className="md:text-3xl 2xl:text-5xl text-2xl">
            I'm <span className="text-blue-600">OUABBI mohamed</span>
          </span>
          <br />
          <span className="md:text-3xl text-2xl 2xl:text-5xl text-black">
          Engineering Student | <br />
          Digital Transformation
          </span>
        </h2>
        <button className="px-8 py-2 mt-4 2xl:text-4xl text-white bg-blue-600 rounded hover:bg-blue-700">Contact</button>
        <SocialIcons />
      </div>
      <div className="relative z-10 px-auto mt-10 md:mt-1 m-auto w-48 h-48 overflow-hidden rounded-full 
                      bg-gray-600 md:w-72 md:h-72 2xl:w-[400px] 2xl:h-[400px]  ">
        <img src={image} alt="Profile" className="2xl:w-[400px] 2xl:h-[400px] md:w-72 md:h-72 xl:w-[400px] 
                                                   xl:h-[400px] object-cover" />
      </div>
    </main>
  );
};

export default Hero;
