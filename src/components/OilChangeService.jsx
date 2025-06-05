import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const OilChangeServices = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:oil" className="w-8 h-8" />, // Full Synthetic Oil Change
    <Icon icon="mdi:wrench" className="w-8 h-8" />, // Semi-Synthetic Oil Change
    <Icon icon="mdi:engine" className="w-8 h-8" />, // Conventional Oil Change
    <Icon icon="mdi:filter" className="w-8 h-8" />, // Oil Filter Replacement
    <Icon icon="mdi:car-wash" className="w-8 h-8" />, // High Mileage Oil Change
    <Icon icon="mdi:car" className="w-8 h-8" />, // Diesel Oil Change
    <Icon icon="mdi:rotate-3d" className="w-8 h-8" />, // Oil Change with Tire Rotation
    <Icon icon="mdi:coolant-temperature" className="w-8 h-8" />, // Oil Change with Fluid Top-up
    <Icon icon="mdi:leaf" className="w-8 h-8" />, // Eco-Friendly Oil Change
    <Icon icon="mdi:water" className="w-8 h-8" />, // Transmission Fluid Check
  ];

  const sections = [
    { heading: 'Full Synthetic Oil Change', content: 'We use high-quality full synthetic oils to improve engine performance, reduce wear, and increase fuel efficiency.' },
    { heading: 'Semi-Synthetic Oil Change', content: 'Combines synthetic and conventional oils, offering better protection than conventional oils at a lower cost.' },
    { heading: 'Conventional Oil Change', content: 'A traditional oil change using conventional motor oil, suitable for older vehicles.' },
    { heading: 'Oil Filter Replacement', content: 'Replacing the oil filter ensures clean oil circulation and prolongs engine life.' },
    { heading: 'High Mileage Oil Change', content: 'Specially formulated oils designed to help older vehicles prevent leaks and protect aging engine components.' },
    { heading: 'Diesel Oil Change', content: 'Oil changes designed specifically for diesel engines, ensuring optimal performance.' },
    { heading: 'Oil Change with Tire Rotation', content: 'Includes a tire rotation to ensure even tire wear and optimal vehicle performance.' },
    { heading: 'Oil Change with Fluid Top-up', content: 'Get your oil changed along with a top-up of other essential fluids like coolant and brake fluid.' },
    { heading: 'Eco-Friendly Oil Change', content: 'We use biodegradable oils and recycle used oil, contributing to a reduced environmental impact.' },
    { heading: 'Transmission Fluid Check', content: 'Inspecting transmission fluid ensures it’s at the right level and in good condition for optimal performance.' },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
    <div className="w-full sm:max-w-6xl flex flex-col gap-10 sm:px-10">
  
        {/* Heading Section */}
        <div className="text-center mt-10 pt-10 mb-8">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>
            Oil Change Services
          </h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            We offer a range of oil change services tailored to your vehicle's needs, ensuring smooth engine performance and longevity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {[0, 1].map((col) => (
            <div key={col} className="flex flex-col gap-5 w-full">
              {sections.slice(col * 5, col * 5 + 5).map((section, index) => {
                const itemIndex = col * 5 + index;
                return (
                  <div
                    key={itemIndex}
                    className={`relative p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ease-in-out ${
                      activeTab === itemIndex
                        ? gradientClasses[itemIndex % gradientClasses.length]
                        : darkMode
                        ? 'bg-gray-700 shadow-md shadow-[#222] inset'
                        : 'bg-white'
                    }`}
                  >
                    <label
                      htmlFor={`acc${itemIndex}`}
                      className="flex items-center cursor-pointer relative group w-full"
                      onClick={() => toggleTab(itemIndex)}
                    >
                      <div
                        className={`w-10 h-10 flex justify-center  text-white shadow-[10px_10px_20px_rgba(0,0,0,0.1),_-10px_-10px_20px_rgba(255,255,255,0.3)] items-center rounded-lg mr-2 ${
                          activeTab === itemIndex
                            ? 'bg-transparent text-white'
                            : gradientClasses[itemIndex % gradientClasses.length]
                        }`}
                      >
                        {icons[itemIndex]}
                      </div>

                      <h3
                        className={`relative font-medium z-20 transition-all duration-300 flex-grow ${
                          activeTab === itemIndex
                            ? 'opacity-100 left-0 bg-white py-2 px-4 rounded-md shadow-md w-auto text-black'
                            : darkMode
                            ? 'text-white'
                            : 'text-[#333]'
                        }`}
                        style={{ wordBreak: 'break-word', maxWidth: 'calc(100% - 100px)' }}
                      >
                        {section.heading}
                      </h3>

                      <span
                        className={`absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl ${
                          darkMode ? 'text-[#ddd]' : 'text-[#333]'
                        } transition-transform duration-1000 group-hover:text-[#333] group-hover:rotate-45 ${
                          activeTab === itemIndex ? 'rotate-45 text-white' : ''
                        }`}
                      >
                        +
                      </span>
                    </label>
                    <div
                      className={`content overflow-hidden transition-all duration-1000 ease-in-out ${
                        activeTab === itemIndex ? 'max-h-[100vh] pb-10' : 'max-h-0'
                      }`}
                    >
                      <p className={`p-2 ${darkMode ? 'text-black' : 'text-[#333]'} z-30`}>
                        {section.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OilChangeServices;
