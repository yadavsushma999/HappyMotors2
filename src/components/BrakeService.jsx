import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const BrakeService = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:car-brake-low-pressure" className="w-8 h-8" />,
    <Icon icon="mdi:car-brake-fluid-level" className="w-8 h-8" />,
    <Icon icon="mdi:car-brake-worn-linings" className="w-8 h-8" />,
    <Icon icon="mdi:car-brake-temperature" className="w-8 h-8" />,
    <Icon icon="mdi:car-brake-abs" className="w-8 h-8" />,
    <Icon icon="mdi:pipe" className="w-8 h-8" />,
    <Icon icon="mdi:car-brake-alert" className="w-8 h-8" />,
    <Icon icon="mdi:shoe-print" className="w-8 h-8" />,
    <Icon icon="mdi:water-pump" className="w-8 h-8" />,
    <Icon icon="mdi:tools" className="w-8 h-8" />,
  ];

  const sections = [
    { heading: 'Brake Pad Replacement', content: 'We replace worn brake pads to ensure your vehicle can stop safely and efficiently. Worn brake pads can increase stopping distance and reduce overall braking performance.' },
    { heading: 'Brake Fluid Flush', content: 'Brake fluid is essential for the performance of your brakes. We perform a brake fluid flush to remove old fluid and replace it with fresh fluid, maintaining the effectiveness of the braking system.' },
    { heading: 'Brake Rotor Resurfacing', content: 'We resurface brake rotors to eliminate imperfections caused by excessive wear. This improves braking performance and prolongs the lifespan of the brake pads and rotors.' },
    { heading: 'Brake Caliper Inspection', content: 'We inspect the brake calipers to ensure they are functioning properly, preventing uneven wear on your brake pads and maintaining efficient braking power.' },
    { heading: 'ABS System Check', content: 'We inspect the Anti-lock Braking System (ABS) to ensure it’s operating correctly. This system prevents wheel lock-up during emergency braking, providing better control.' },
    { heading: 'Brake Line Inspection', content: 'We check the brake lines for leaks, cracks, or wear that could lead to brake failure. A thorough inspection of the brake lines is essential for your safety.' },
    { heading: 'Drum Brake Service', content: 'For vehicles with drum brakes, we inspect and service the drums to ensure proper braking performance. We replace worn components and adjust the drum brakes for maximum efficiency.' },
    { heading: 'Brake Shoe Replacement', content: 'We replace worn brake shoes to restore proper braking performance, especially for drum brake systems, ensuring optimal stopping power and safety.' },
    { heading: 'Brake System Bleeding', content: 'We perform brake system bleeding to remove air bubbles from the brake lines, ensuring your brakes feel firm and responsive.' },
    { heading: 'Brake Inspection and Diagnostics', content: 'Our team performs a thorough brake inspection, identifying any issues with your braking system, including pads, rotors, calipers, and fluid levels, to ensure safe operation.' },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
      <div className="mx-10 max-w-6xl flex flex-col gap-10">
        {/* Heading Section */}
        <div className="text-center mb-8 mt-10 pt-10">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>Brake Service</h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            We offer a variety of brake services to ensure your vehicle's braking system is functioning at its best, keeping you safe on the road.
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

export default BrakeService;
