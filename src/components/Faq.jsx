import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const questionsAndAnswers = [
    {
      question: 'What types of services do you offer?',
      answer: 'We offer a wide range of services including engine repair, oil changes, brake services, tire replacements, diagnostics, battery checks, and much more. Whether it\'s routine maintenance or complex repairs, we’ve got you covered.',
    },
    {
      question: 'How often should I get my oil changed?',
      answer: 'Most vehicles need an oil change every 3,000 to 5,000 miles, but it\'s best to check your vehicle\'s manual for manufacturer recommendations. We recommend getting your oil changed regularly to ensure optimal engine performance.',
    },
    {
      question: 'How do I know when my brakes need to be serviced?',
      answer: 'If you hear a squeaking or grinding noise when braking, or if your car pulls to one side when applying brakes, it might be time for a brake inspection. If you experience a delay in braking response or notice your brake fluid level is low, please visit our garage immediately.',
    },
    {
      question: 'Do you offer tire replacement and balancing services?',
      answer: 'Yes, we offer tire replacement, balancing, and alignment services to ensure your vehicle performs optimally and stays safe on the road. We have a wide selection of tires to suit different vehicles and driving needs.',
    },
    {
      question: 'Is it necessary to replace my timing belt?',
      answer: 'The timing belt should typically be replaced every 60,000 to 100,000 miles, depending on your vehicle\'s make and model. Failure to replace it can result in serious engine damage, so it\'s essential to stay on top of this maintenance.',
    },
    {
      question: 'Do I need to schedule an appointment for service?',
      answer: 'While we accept walk-ins, it’s best to schedule an appointment to ensure prompt service. Our team can help you find a convenient time and avoid long wait times.',
    },
    {
      question: 'How long will my repair take?',
      answer: 'The duration of the repair depends on the type of service needed. Minor services like oil changes may take about 30-45 minutes, while more extensive repairs could take a few hours or longer. Our team will give you an estimate of the time required once we evaluate your vehicle.',
    },
    {
      question: 'Can you perform diagnostics on my vehicle?',
      answer: 'Yes, we offer comprehensive diagnostics for any check engine light or unusual vehicle behavior. Using advanced tools, we identify the issue and provide a detailed report, along with recommendations for repair.',
    },
    {
      question: 'Do you offer any warranties on services and repairs?',
      answer: 'Yes, we offer warranties on many of our services and parts. The specifics of the warranty depend on the service or part installed. Please feel free to ask for details when scheduling your service.',
    },
    {
      question: 'Do you accept all types of insurance for repairs?',
      answer: 'We accept most major insurance providers for covered repairs. If you\'re in need of insurance assistance, our team can help you understand the coverage and work with your insurance company to ensure your vehicle is repaired as quickly as possible.',
    },
    {
      question: 'What should I do if my car breaks down?',
      answer: 'If your car breaks down, stay safe and call for roadside assistance if necessary. Once your vehicle is safe, contact our garage, and we can arrange towing services to bring your car to us for evaluation and repairs.',
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we offer emergency repair services. If you’re in urgent need of repairs, please call us directly, and we will prioritize your vehicle’s service.',
    },
    {
      question: 'Can I wait at the garage while my car is being serviced?',
      answer: 'Yes, we have a comfortable waiting area where you can relax while we take care of your vehicle. For longer services, we may recommend local accommodations or a courtesy shuttle service.',
    },
    {
      question: 'What makes your garage different from others?',
      answer: 'Our garage stands out for its quality service, experienced technicians, and commitment to customer satisfaction. We use the latest technology and diagnostic tools to ensure accurate repairs, and we offer transparent pricing with no hidden fees.',
    },
    {
      question: 'How can I prepare my vehicle for a seasonal change (e.g., winter or summer)?',
      answer: 'Preparing your car for different seasons includes checking your tires, ensuring your battery is in good condition, replacing old wiper blades, checking the fluid levels, and ensuring the HVAC system is functioning properly. We offer complete seasonal checkups for peace of mind.',
    },
  ];

  return (
    <div
      className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}
    >
      <div className="mx-10 max-w-6xl flex flex-col gap-10">
        <h1
          className={`text-3xl font-bold text-center mt-2 mb-8 ${
            darkMode ? 'text-white' : 'text-[#333]'
          }`}
        >
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-5 w-full">
            {questionsAndAnswers.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ease-in-out ${
                  activeTab === index
                    ? gradientClasses[index % gradientClasses.length]
                    : darkMode
                    ? 'bg-gray-700 shadow-md shadow-[#222] inset'
                    : 'bg-white'
                }`}
              >
                <label
                  htmlFor={`acc${index + 1}`}
                  className="flex items-center cursor-pointer relative group w-full"
                  onClick={() => toggleTab(index)}
                >
                  <h2
                    className={`w-10 h-10 font-bold flex justify-center items-center rounded-lg mr-2 ${
                      activeTab === index
                        ? 'bg-transparent text-white'
                        : gradientClasses[index % gradientClasses.length]
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </h2>

                  <h3
                    className={`relative font-medium z-20 transition-all duration-300 flex-grow ${
                      activeTab === index
                        ? 'opacity-100 left-0 bg-white py-2 px-4 rounded-md shadow-md w-auto text-black'
                        : darkMode
                        ? 'text-white'
                        : 'text-[#333]'
                    }`}
                    style={{ wordBreak: 'break-word', maxWidth: 'calc(100% - 100px)' }}
                  >
                    {item.question}
                  </h3>

                  <span
                    className={`absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl ${
                      darkMode ? 'text-[#ddd]' : 'text-[#333]'
                    } transition-transform duration-1000 group-hover:text-[#333] group-hover:rotate-45 ${
                      activeTab === index ? 'rotate-45 text-white' : ''
                    }`}
                  >
                    +
                  </span>
                </label>
                <div
                  className={`content overflow-hidden transition-all duration-1000 ease-in-out ${
                    activeTab === index ? 'max-h-[100vh] pb-10' : 'max-h-0'
                  }`}
                >
                  <p className={`p-2 ${darkMode ? 'text-white' : 'text-[#333]'} z-30`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 w-full">
            {questionsAndAnswers.slice(8).map((item, index) => (
              <div
                key={index + 8}
                className={`relative p-6 rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ease-in-out ${
                  activeTab === index + 8
                    ? gradientClasses[(index + 8) % gradientClasses.length]
                    : darkMode
                    ? 'bg-gray-700 shadow-md shadow-[#222] inset'
                    : 'bg-white'
                }`}
              >
                <label
                  htmlFor={`acc${index + 9}`}
                  className="flex items-center cursor-pointer relative group w-full"
                  onClick={() => toggleTab(index + 8)}
                >
                  <h2
                    className={`w-10 h-10 font-bold flex justify-center items-center rounded-lg mr-2 ${
                      activeTab === index + 8
                        ? 'bg-transparent text-white'
                        : gradientClasses[(index + 8) % gradientClasses.length]
                    }`}
                  >
                    {String(index + 9).padStart(2, '0')}
                  </h2>

                  <h3
                    className={`relative font-medium z-20 transition-all duration-300 flex-grow ${
                      activeTab === index + 8
                        ? 'opacity-100 left-0 bg-white py-2 px-4 rounded-md shadow-md w-auto text-black'
                        : darkMode
                        ? 'text-white'
                        : 'text-[#333]'
                    }`}
                    style={{ wordBreak: 'break-word', maxWidth: 'calc(100% - 100px)' }}
                  >
                    {item.question}
                  </h3>

                  <span
                    className={`absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl ${
                      darkMode ? 'text-[#ddd]' : 'text-[#333]'
                    } transition-transform duration-1000 group-hover:text-[#333] group-hover:rotate-45 ${
                      activeTab === index + 8 ? 'rotate-45 text-white' : ''
                    }`}
                  >
                    +
                  </span>
                </label>
                <div
                  className={`content overflow-hidden transition-all duration-1000 ease-in-out ${
                    activeTab === index + 8 ? 'max-h-[100vh] pb-10' : 'max-h-0'
                  }`}
                >
                  <p className={`p-2 ${darkMode ? 'text-white' : 'text-[#333]'} z-30`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
