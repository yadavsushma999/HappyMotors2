import  { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { Icon } from '@iconify/react'; // Import Iconify

const InsuranceInGarage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const { darkMode } = useTheme(); // Access the darkMode state from the context

  const gradientClasses = [
    'bg-gradient-to-r from-[#70F570] to-[#49C628]',
    'bg-gradient-to-r from-[#3C8CE7] to-[#00EAFF]',
    'bg-gradient-to-r from-[#FF96F9] to-[#C32BAC]',
    'bg-gradient-to-r from-[#FD6E6A] to-[#FFC600]',
  ];

  const icons = [
    <Icon icon="mdi:clipboard-text" className="w-8 h-8" />, // Insurance Consultation
    <Icon icon="mdi:shield" className="w-8 h-8" />, // Insurance Policy
    <Icon icon="mdi:check-circle" className="w-8 h-8" />, // Claim Assistance
    <Icon icon="mdi:cash" className="w-8 h-8" />, // Payment Management
    <Icon icon="mdi:bank" className="w-8 h-8" />, // Financing Options
    <Icon icon="mdi:alert-circle" className="w-8 h-8" />, // Risk Assessment
    <Icon icon="mdi:calendar-check" className="w-8 h-8" />, // Policy Renewal
    <Icon icon="mdi:email" className="w-8 h-8" />, // Communication
    <Icon icon="mdi:book" className="w-8 h-8" />, // Terms & Conditions
    <Icon icon="mdi:account-key" className="w-8 h-8" />, // Documentation
  ];

  const sections = [
    { heading: 'Insurance Consultation', content: 'Get professional advice to understand the best insurance plans for your vehicle, covering all possible scenarios and ensuring comprehensive protection.' },
    { heading: 'Insurance Policy', content: 'Choose from a variety of tailored insurance policies that best suit your car and driving habits, ensuring the right coverage for all situations.' },
    { heading: 'Claim Assistance', content: 'Our team provides full support during the claims process, ensuring fast, fair, and efficient resolution for any accident or damage claims you make.' },
    { heading: 'Payment Management', content: 'We manage your insurance payments seamlessly, offering easy payment options and ensuring that you stay on top of your premium dues and renewal dates.' },
    { heading: 'Financing Options', content: 'Explore flexible financing options to help manage your insurance premiums, with easy installment plans to fit your budget and make payments hassle-free.' },
    { heading: 'Risk Assessment', content: 'Our experts assess potential risks to your vehicle, recommending the best coverage to protect against theft, damage, or accidents, ensuring peace of mind.' },
    { heading: 'Policy Renewal', content: 'We send timely reminders for policy renewals, ensuring your coverage never expires. Renewal options are made simple with a clear and efficient process.' },
    { heading: 'Communication', content: 'Stay informed with clear, continuous communication. We help you understand every aspect of your insurance policy, claims, and any necessary steps along the way.' },
    { heading: 'Terms & Conditions', content: 'We provide easy-to-understand terms and conditions, explaining coverage limits, exclusions, and any fine print, so you know exactly what your policy includes.' },
    { heading: 'Documentation', content: 'We assist in gathering and submitting all necessary documentation for your insurance claims, ensuring that everything is in order for a quick approval process.' },
  ];
  

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen py-11 ${darkMode ? '' : 'bg-[#F5F8FF]'}`}>
      <div className="mx-10 max-w-6xl flex flex-col gap-10">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-[#333]'}`}>Insurance in Garage Services</h1>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-400' : 'text-[#555]'}`}>
            We offer a range of insurance services to keep your vehicle protected and ensure peace of mind.
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

export default InsuranceInGarage;
