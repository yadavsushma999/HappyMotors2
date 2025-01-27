import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="relative btn px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden hover:bg-blue-700 transition-all duration-300"
      onClick={onClick}  // This triggers the passed onClick function
    >
      {text}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('path_to_stars_image.png')] bg-cover opacity-0 transition-all duration-300 hover:opacity-100 filter drop-shadow-[0_0_10px_#fffdef] pointer-events-none"></div>
    </button>
  );
};

export default Button;
