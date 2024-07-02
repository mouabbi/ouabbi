import React from 'react';

const Modal = ({ icon, message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-md p-8 rounded-lg shadow-lg text-center">
        <div className="text-5xl text-green-500 mb-4">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <p className="text-lg text-gray-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
