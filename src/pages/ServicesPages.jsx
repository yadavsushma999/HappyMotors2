// src/pages/ServicesPage.jsx
import React from 'react';
import { useTheme } from '../components/ThemeContext'; // Use theme context to manage dark/light mode

const ServicesPage = () => {
  const { darkMode } = useTheme(); // Get the current theme (darkMode)

  const services = [
    {
      id: 1,
      title: "Engine Repair",
      description:
        "Our engine repair service ensures your vehicle's engine runs smoothly. We diagnose and repair engine problems, offering everything from minor fixes to major overhauls, so you can hit the road with confidence.",
      image: "https://via.placeholder.com/400x300?text=Engine+Repair", // Placeholder image URL
    },
    {
      id: 2,
      title: "Oil Change",
      description:
        "Regular oil changes are essential for maintaining your vehicle's performance. Our team provides fast and efficient oil changes using high-quality oils that keep your engine running smoothly and extend its lifespan.",
      image: "https://via.placeholder.com/400x300?text=Oil+Change", // Placeholder image URL
    },
    {
      id: 3,
      title: "Brake Services",
      description:
        "Your safety is our priority. We offer comprehensive brake services, including brake pad replacement, rotor resurfacing, and brake fluid checks to ensure your brakes are working at their best.",
      image: "https://via.placeholder.com/400x300?text=Brake+Services", // Placeholder image URL
    },
    {
      id: 4,
      title: "Tire Replacement",
      description:
        "When it's time for new tires, we offer a wide selection of high-quality tires suited for your vehicle. Our tire replacement services include balancing, alignment, and installation to keep you safe on the road.",
      image: "https://via.placeholder.com/400x300?text=Tire+Replacement", // Placeholder image URL
    },
  ];

  return (
    <div
      className={`w-full min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} p-8`}
    >
      <h2 className={`text-4xl font-semibold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Our Services
      </h2>

      <div className="space-y-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-container flex flex-col lg:flex-row items-center justify-between gap-8 p-6 rounded-lg shadow-md transition-all duration-700 ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            } ${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}`} // Animation applied here
          >
            {/* Left-aligned Image, Right-aligned Content or vice versa */}
            <div className={`flex-1 flex justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-w-[400px] rounded-lg transition-transform duration-500"
              />
            </div>
            <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
              <h3
                className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                {service.title}
              </h3>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {service.description}
              </p>
              <button
                className={`mt-4 px-6 py-2 bg-blue-500 text-white rounded-md ${
                  darkMode ? 'hover:bg-blue-400' : 'hover:bg-blue-600'
                } transition-all duration-300`}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
