import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal'; // Import your Modal component here

const ContactForm = () => {
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
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
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 2;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const speedX = (Math.random() - 0.5) * 0.4; // Random X speed
        const speedY = (Math.random() - 0.5) * 0.8; // Random Y speed
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating submission success for demonstration
    console.log(formData); // Replace with your actual submission logic

    // Show modal on successful submission
    setShowModal(true);

    // Reset form fields after submission (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div id="contact" className="bg-gray-600 text-gray-900 rounded-lg px-5 shadow-lg pb-10 md:pb-32 mt-20 md:mt-40">
        <div className="mb-20 mt-[-20px]">
          <div className="bg-gray-600 m-auto rounded-lg flex flex-col items-center max-w-6xl gap-6">
            <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mx-auto pt-5 gap-4 text-white max-w-2xl relative">
              Contact
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-20 border-b-2 border-white-600"></div>
            </h1>
            <h2 className='md:text-xl 2xl:text-2xl mt-5 text-white mx-auto text-center max-w-xl 2xl:max-w-2xl text-center'>
              Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
            </h2>
            <form onSubmit={handleSubmit} className="mt-4  px-5 flex flex-col items-center gap-4 w-full 2xl:max-w-2xl max-w-xl">
              <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 2xl:text-md hover:bg-gray-100 rounded-full md:rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="mt-2 block w-full px-3 py-2 2xl:text-md rounded-full md:rounded-lg placeholder-gray-400 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-gray-100"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="mt-2 block w-full px-3 rounded-2xl py-2 2xl:text-md placeholder-gray-400 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hover:bg-gray-100"
                required
              ></textarea>
              <button
                type="submit"
                className="border-2 gap-2 text-bold 2xl:text-lg text-white flex items-center border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white text-white-500 py-2 px-4 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Modal component */}
      {showModal && (
        <Modal
          icon="check-circle" // Icon for success
          message="Message sent successfully!" // Success message
          onClose={() => setShowModal(false)} // Close modal function
        />
      )}
    </>
  );
};

export default ContactForm;
