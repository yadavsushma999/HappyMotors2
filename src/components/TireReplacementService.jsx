import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const TireReplacement = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:search-expand" className="w-8 h-8" />, // Tire Inspection
    <Icon icon="mdi:wrench" className="w-8 h-8" />, // Tire Removal
    <Icon icon="mdi:check-decagram" className="w-8 h-8" />, // Tire Selection
    <Icon icon="mdi:tire" className="w-8 h-8" />, // Tire Mounting
    <Icon icon="mdi:car-tire-alert" className="w-8 h-8" />, // Tire Balancing
    <Icon icon="mdi:format-horizontal-align-center" className="w-8 h-8" />, // Tire Alignment
    <Icon icon="mdi:car" className="w-8 h-8" />, // Pressure Check & Inflation
    <Icon icon="mdi:rotate-right" className="w-8 h-8" />, // Tire Rotation
    <Icon icon="mdi:valve" className="w-8 h-8" />, // Valve Stem Replacement
    <Icon icon="mdi:delete-circle-outline" className="w-8 h-8" />, // Tire Disposal
  ];

  const sections = [
    { heading: 'Tire Inspection', content: 'Inspect tire tread, alignment, and overall condition for wear or damage.' },
    { heading: 'Tire Removal', content: 'Safely remove old tires and prepare the wheels for new installations.' },
    { heading: 'Tire Selection', content: 'Help select the best tires based on your vehicle and needs.' },
    { heading: 'Tire Mounting', content: 'Mount new tires with precision for optimal performance.' },
    { heading: 'Tire Balancing', content: 'Balance tires to prevent vibration and ensure smooth driving.' },
    { heading: 'Tire Alignment', content: 'Ensure correct tire alignment for even wear and improved handling.' },
    { heading: 'Pressure Check & Inflation', content: 'Ensure proper tire inflation to manufacturer recommendations.' },
    { heading: 'Tire Rotation', content: 'Rotate tires for even wear and enhanced vehicle performance.' },
    { heading: 'Valve Stem Replacement', content: 'Replace damaged valve stems to prevent air leaks.' },
    { heading: 'Tire Disposal', content: 'Dispose of old tires in an eco-friendly and responsible manner.' },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
      <div className="mx-10 max-w-6xl flex flex-col gap-10">
        <div className="text-center mb-8 mt-10 pt-10">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>Tire Replacement Services</h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            We offer comprehensive tire replacement services to keep your vehicle running smoothly and safely on the road.
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
                        className={`w-10 h-10 flex justify-center text-white shadow-[10px_10px_20px_rgba(0,0,0,0.1),_-10px_-10px_20px_rgba(255,255,255,0.3)] items-center rounded-lg mr-2 ${
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
                      <p className={`p-2 ${darkMode ? 'text-black' : 'text-[#333]'} z-30`}>{section.content}</p>
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

export default TireReplacement;
