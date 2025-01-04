import React from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the custom hook to use theme
import Card from './Card'; // Import the reusable Card component

const Insurance = () => {
  const { darkMode, toggleTheme } = useTheme(); // Access darkMode and toggleTheme from the ThemeContext

  const insuranceImages = [
    { src: './images/insurance/nicl.jpg', alt: 'NICL' },
    { src: './images/insurance/sriraminsu.jpg', alt: 'Sriram Insurance' },
    { src: './images/insurance/kotak.png', alt: 'Kotak Insurance' },
    { src: './images/insurance/futureinsu.jpg', alt: 'Future Insurance' },
    { src: './images/insurance/hdfcinsu.jpg', alt: 'HDFC Insurance' },
    { src: './images/insurance/godigitinsu.jpeg', alt: 'GoDigit Insurance' },
    { src: './images/insurance/unitedinsu.jpeg', alt: 'United Insurance' },
    { src: './images/insurance/zunoinsu.jpg', alt: 'Zuno Insurance' },
    { src: './images/insurance/cholainsu.jpeg', alt: 'Chola Insurance' },
  ];

  return (
    <section
      className={`insurance mt-5 ${darkMode ? 'bg-[#333]' : 'bg-[#fceab9]'} pb-12 flex flex-col items-center`}
    >
      <div className="space"></div>

      <div className="row mb-5 mt-5 text-center">
        <div className="serv">
          <h1
            className={`text-4xl font-bold transition ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Multi Insurance Claim Settlement
          </h1>
          <p
            className={`para mt-3 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          >
            We specialize in car insurance policies that offer comprehensive protection, taking the stress out of unexpected incidents.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-6">
        {insuranceImages.map((image, index) => (
          <Card key={index} imageSrc={image.src} altText={image.alt} />
        ))}
      </div>

      {/* Button to toggle dark mode */}
      <button
        onClick={toggleTheme} // Use toggleTheme from the ThemeContext
        className={`py-2 px-4 rounded-md mt-5 mx-auto block ${
          darkMode
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        Toggle Dark Mode
      </button>
    </section>
  );
};

export default Insurance;
