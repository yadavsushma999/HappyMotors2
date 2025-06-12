import { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const Painting = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:brush" className="w-8 h-8" />, // Surface Preparation
    <Icon icon="mdi:spray" className="w-8 h-8" />, // Base Coat Application
    <Icon icon="mdi:palette" className="w-8 h-8" />, // Color Matching
    <Icon icon="mdi:coat" className="w-8 h-8" />, // Clear Coat Finishing
    <Icon icon="mdi:car-paint" className="w-8 h-8" />, // Detailing and Polishing
    <Icon icon="mdi:shield" className="w-8 h-8" />, // Protection and Sealing
    <Icon icon="mdi:hammer-wrench" className="w-8 h-8" />, // Scratch Removal
    <Icon icon="mdi:car-wash" className="w-8 h-8" />, // Pre-Paint Cleaning
    <Icon icon="mdi:cloud" className="w-8 h-8" />, // Drying and Curing
    <Icon icon="mdi:palette-swatch" className="w-8 h-8" />, // Custom Designs and Decals
  ];

  const sections = [
    { heading: 'Surface Preparation', content: 'We carefully prepare the vehicle surface by cleaning and sanding to ensure optimal paint adhesion and a smooth finish.' },
    { heading: 'Base Coat Application', content: 'We apply a high-quality base coat to ensure a strong foundation for the final color and finish of your vehicle.' },
    { heading: 'Color Matching', content: 'We provide accurate color matching to ensure your vehicle looks as good as new, whether for a touch-up or a full respray.' },
    { heading: 'Clear Coat Finishing', content: 'A clear coat is applied to seal the paint and protect your vehicle’s surface from weather and environmental damage.' },
    { heading: 'Detailing and Polishing', content: 'After the paint job, we polish and detail the vehicle to enhance the final look, giving it a glossy, smooth finish.' },
    { heading: 'Protection and Sealing', content: 'We apply protective coatings to ensure the longevity of the paint and prevent chips, scratches, and fading over time.' },
    { heading: 'Scratch Removal', content: 'We remove light scratches and imperfections from your vehicle’s paint to restore its original appearance and smoothness.' },
    { heading: 'Pre-Paint Cleaning', content: 'Our team ensures that your vehicle is thoroughly cleaned before painting, removing any dirt, oil, or debris that could affect the finish.' },
    { heading: 'Drying and Curing', content: 'We ensure proper drying and curing of the paint to ensure its durability, applying heat if necessary for a flawless finish.' },
    { heading: 'Custom Designs and Decals', content: 'We offer custom designs, decals, and wraps to give your vehicle a unique look, whether for personal or professional use.' },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
      <div className="mx-10 max-w-6xl flex flex-col gap-10">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>Painting Works in Garage on Vehicles</h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            We provide top-notch vehicle painting services to restore and enhance your car’s appearance.
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

export default Painting;
