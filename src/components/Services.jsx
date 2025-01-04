import React from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context

const Services = () => {
  const { darkMode, toggleTheme } = useTheme(); // Get darkMode and toggleTheme from the context

  const servicesData = [
    {
      imgSrc: './images/maintenance.jpeg',
      title: 'Regular Maintenance',
      description: 'Ensure peak performance with our routine check-ups and maintenance services.',
    },
    {
      imgSrc: './images/repairing.jpeg',
      title: 'Emergency Repairing',
      description: 'Back on the road in no time with our efficient and effective repair service.',
    },
    {
      imgSrc: './images/detailing.jpeg',
      title: 'Detailing and Cleaning',
      description: 'Experience a ride that looks and feels new with our professional detailing service.',
    },
    {
      imgSrc: './images/painting.jpeg',
      title: 'Car Painting',
      description:
        'Your trusted local destination for top-notch car painting services. We give your car the fresh and attractive look it deserves.',
    },
    {
      imgSrc: './images/insurance.jpeg',
      title: 'Insurance',
      description:
        'Give your car the protection it deserves. Our comprehensive insurance coverage puts you in the driver\'s seat, worry-free.',
    },
  ];

  return (
    <section
      className={`services p-8 transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >

      <div className="text-center mb-8">
        <h1
          className={`text-4xl font-bold transition ${darkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Our Services
        </h1>
        <p
          className={`mt-3 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Driven By Excellence. Delivered With Care.
          <br />
          Comprehensive Vehicle Services Tailored To Your Needs.
        </p>
      </div>

      {/* Flexbox Layout for Card Containers */}
      <div className="flex flex-wrap justify-center gap-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`card shadow-md border border-gray-300 p-4 rounded-lg w-full sm:w-72 md:w-80 lg:w-96 xl:w-[400px] transition-transform duration-300 hover:rotate-3 hover:shadow-2xl hover:border-white ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
          >
            {/* Flexbox to split image and content */}
            <div className="flex flex-col">
              {/* Image section */}
              <div className="w-full h-48">
                <img
                  src={service.imgSrc}
                  className="w-full h-full object-cover object-center"
                  alt={service.title}
                />
              </div>

              {/* Content section */}
              <div className="p-2 flex flex-col justify-between">
                <h2
                  className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                >
                  {service.title}
                </h2>
                <p
                  className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
