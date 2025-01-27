import React, { useState } from 'react';
import { facebook, instagram, linkedin, twitter } from '../assets';
import { useTheme } from '../components/ThemeContext';  // Import the custom hook to use theme

const ContactUs = () => {
  const { darkMode, toggleTheme } = useTheme(); 
  // Access darkMode and toggleTheme from the ThemeContext
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      id: 'contact-1',
      icon: facebook,
      title: 'Facebook',
      content: 'https://www.facebook.com/yourpage',
    },
    {
      id: 'contact-2',
      icon: instagram,
      title: 'Instagram',
      content: 'https://www.instagram.com/yourprofile',
    },
    {
      id: 'contact-3',
      icon: linkedin,
      title: 'LinkedIn',
      content: 'https://www.linkedin.com/in/yourprofile',
    },
    {
      id: 'contact-4',
      icon: twitter,
      title: 'Twitter',
      content: 'https://twitter.com/yourhandle',
    },
  ];

  return (
    <section id="contactus"
      className={`contactus  py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-[#fceab9] via-white to-white text-gray-800'}`}
    >
      <div className="max-w-screen-lg mx-auto">
        {/* Title */}
        <div className="title mb-8 flex justify-center items-center space-x-4 mt-11">  {/* Add space between the elements */}
  <h1 className="text-3xl font-semibold">Get In Touch</h1>
  <button
    onClick={toggleTheme}  // Use toggleTheme from the ThemeContext
    className={`py-2 px-4 rounded ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
</div>


        {/* Flex Container for Form and Info */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Contact Form */}
          <div
            className={`flex-1 p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`w-full rounded-md p-3 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`w-full rounded-md p-3 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    className={`w-full rounded-md p-3 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 987 654 3210"
                    className={`w-full rounded-md p-3 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message here..."
                    className={`w-full rounded-md p-3 shadow focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-50 border-gray-300'}`}
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg shadow bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`flex-1 p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <div>
              {contactInfo.map((info) => (
                <div key={info.id} className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 flex justify-center items-center rounded-full ${darkMode ? 'bg-gray-700' : 'bg-blue-500'}`}
                  >
                    <img
                      src={info.icon}
                      alt={info.title}
                      className={`w-6 h-6 object-contain ${darkMode ? 'filter brightness-150' : 'filter brightness-100'}`}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">{info.title}</h4>
                    <p>
                      <a
                        href={info.content}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                      >
                        {info.content}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.47248825411!2d72.91205237478015!3d20.404628708923305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf8179171dcd%3A0x1626aea55dac2b30!2sHappy%20motors!5e0!3m2!1sen!2sin!4v1694779837878!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
