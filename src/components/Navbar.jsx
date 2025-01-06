import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { FaSun, FaMoon, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../components/ThemeContext';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for detecting current path

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme(); // Use darkMode and toggleTheme from ThemeContext
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get the current route/path

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Logo Section */}
      <Link to="/" className="w-[124px] h-[32px]">
        <img src={logo} alt="Happy Motors" className="w-[124px] h-[32px]" />
      </Link>

      {/* Navigation Links for Larger Screens */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer px-4 text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white hover:text-blue-500 transition-colors duration-300`}
          >
            {/* Conditional rendering for links */}
            {location.pathname === '/' && nav.id !== 'home' ? (
              // If on Home page and it's not 'home' link, use anchor for scrolling
              <a href={`#${nav.id}`}>{nav.title}</a>
            ) : (
              // On other pages or for Home link, use Link component for routing
              <Link to={`/${nav.id}`}>{nav.title}</Link>
            )}
          </li>
        ))}
      </ul>

      {/* Right Section: Social Media Icons, Theme Toggle, and Hamburger */}
      <div className="flex items-center">
        {/* Social Media Icons */}
        <div className="hidden sm:flex space-x-4">
          <a href="https://www.whatsapp.com/" className="text-green-500 hover:text-green-400">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/" className="text-pink-600 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.youtube.com/" className="text-red-600 hover:text-red-500">
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-6 w-20 h-8 flex items-center rounded-full p-1 relative transition-all duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          {/* Sun Icon */}
          <FaSun
            className={`absolute left-1 transform transition-transform ${
              darkMode ? 'text-gray-400' : 'text-yellow-500 scale-110'
            }`}
            size={16}
          />

          {/* Moon Icon */}
          <FaMoon
            className={`absolute right-1 transform transition-transform ${
              darkMode ? 'text-gray-300 scale-110' : 'text-gray-500'
            }`}
            size={16}
          />

          {/* Slider Ball */}
          <div
            className={`w-6 h-6 rounded-full shadow-md bg-white transform transition-transform duration-300 ${
              darkMode ? 'translate-x-12' : 'translate-x-0'
            }`}
          ></div>
        </button>

        {/* Hamburger Menu Icon */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain sm:hidden ml-6 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
              } text-white`}
            >
              {/* Conditional rendering for links */}
              {location.pathname === '/' && nav.id !== 'home' ? (
                // If on Home page and it's not 'home' link, use anchor for scrolling
                <a href={`#${nav.id}`}>{nav.title}</a>
              ) : (
                // On other pages or for Home link, use Link component for routing
                <Link to={`/${nav.id}`}>{nav.title}</Link>
              )}
            </li>
          ))}

          {/* Social Media Icons in Sidebar */}
          <div className="flex space-x-4 mt-6">
            <a href="https://www.whatsapp.com/" className="text-green-500 hover:text-green-400">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.instagram.com/" className="text-pink-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/" className="text-red-600 hover:text-red-500">
              <FaYoutube size={20} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
