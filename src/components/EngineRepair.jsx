import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const EngineDiagnostics = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:check-circle" className="w-8 h-8" />, // CheckCircleIcon
    <Icon icon="mdi:cog" className="w-8 h-8" />, // CogIcon
    <Icon icon="mdi:beaker" className="w-8 h-8" />, // BeakerIcon
    <Icon icon="mdi:alert-circle" className="w-8 h-8" />, // ExclamationCircleIcon
    <Icon icon="mdi:clock" className="w-8 h-8" />, // ClockIcon
    <Icon icon="mdi:fire" className="w-8 h-8" />, // FireIcon
    <Icon icon="mdi:fuel" className="w-8 h-8" />, // LightBulbIcon
    <Icon icon="mdi:sparkles" className="w-8 h-8" />, // SparklesIcon
    <Icon icon="mdi:cloud" className="w-8 h-8" />, // CloudIcon
    <Icon icon="mdi:flash" className="w-8 h-8" />, // BoltIcon
  ];

  const sections = [
    {
      heading: 'Comprehensive Engine Diagnostics',
      content:
        'We perform a thorough engine performance test to assess fuel efficiency, power loss, and irregular sounds that may indicate underlying issues with your engine.',
    },
    {
      heading: 'Computerized Engine Diagnostics',
      content:
        'Using OBD-II scanners, we identify error codes and pinpoint specific engine problems, ensuring a precise understanding of what needs repair.',
    },
    {
      heading: 'Compression Testing',
      content:
        'We check the compression of the engine’s cylinders to assess its internal health. Low compression may signal issues such as worn-out piston rings or cylinder head problems.',
    },
    {
      heading: 'Leak Detection',
      content:
        'Our technicians check for oil or coolant leaks, which could seriously impact engine performance. Timely detection can prevent further damage to the engine.',
    },
    {
      heading: 'Timing Belt Inspection',
      content:
        'We inspect the timing belt to ensure it’s not worn or damaged. A faulty timing belt can cause severe engine damage if not addressed in time.',
    },
    {
      heading: 'Exhaust System Check',
      content:
        'Our team checks the exhaust system for leaks and signs of corrosion, which can lead to inefficient engine performance and potential safety hazards.',
    },
    {
      heading: 'Fuel System Diagnostics',
      content:
        'We inspect the fuel system for issues like clogging or leaks that can affect fuel efficiency and engine performance.',
    },
    {
      heading: 'Ignition System Testing',
      content:
        'Our experts test the ignition system to ensure your engine starts smoothly and runs efficiently, checking components like spark plugs and coils.',
    },
    {
      heading: 'Cooling System Inspection',
      content:
        'We check the cooling system, including the radiator and coolant levels, to prevent overheating and engine damage.',
    },
    {
      heading: 'Battery and Electrical Diagnostics',
      content:
        'We assess the vehicle’s electrical system, ensuring the battery and alternator are functioning properly, which is critical for smooth engine operation.',
    },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
  <div className="w-full sm:max-w-6xl flex flex-col gap-10  sm:px-10">

        {/* Heading Section */}
        <div className="text-center mb-8 mt-10 pt-10">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>
            Engine Diagnostics Services
          </h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            Our diagnostic services ensure your engine is running at its optimal performance.
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
                        className={`w-10 h-10 font-bold  text-white shadow-[10px_10px_20px_rgba(0,0,0,0.1),_-10px_-10px_20px_rgba(255,255,255,0.3)] flex justify-center items-center rounded-lg mr-2 ${
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

export default EngineDiagnostics;
