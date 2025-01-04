// Card.js
import React from 'react';

const Card = ({ imageSrc, altText }) => (
  <div className="card1 bg-white transition-all duration-300 border-2 border-red-500 w-[200px] h-[200px] p-2 m-2 rounded-[14px] hover:transform hover:rotate-3 hover:shadow-xl hover:border-white hover:w-[215px] hover:h-[215px]">
    <img
      src={imageSrc}
      className="w-full h-full object-contain rounded-[14px]"  // Ensuring the image doesn't overflow and stays contained
      alt={altText}
    />
  </div>
);

export default Card;
