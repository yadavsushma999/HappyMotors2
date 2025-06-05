import { useState, useEffect } from 'react';
import {  logo,} from '../assets';
import { navLinks } from '../constants';
import { FaSun, FaMoon, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp,FaTimes,FaBars } from 'react-icons/fa';
import { useTheme } from '../components/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme(); // Theme context
  const [toggle, setToggle] = useState(false); // Hamburger menu toggle
  const [scrolled, setScrolled] = useState(false); // Track scroll state
  const location = useLocation(); // Detect current path

  useEffect(() => {
    // Listen to the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // Set to true when scrolled down
      } else {
        setScrolled(false); // Set to false when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neumorphism box shadows
  const shadowLight = 'shadow-lg shadow-gray-400'; // Light mode shadow
  const shadowDark = 'shadow-inner shadow-black'; // Dark mode shadow

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-50 transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'
        } ${scrolled ? (darkMode ? 'bg-gray-900' : 'bg-white') : 'bg-transparent'} ${darkMode ? shadowDark : shadowLight
        }`}
      style={{
        boxShadow: darkMode
          ? '5px 5px 10px #000, -5px -5px 10px #333'
          : scrolled
            ? '5px 5px 10px #ccc, -5px -5px 10px #fff'
            : '5px 5px 10px #ccc, -5px -5px 10px #fff', // Light mode, no shadow when at the top
      }}
    >
      {/* Logo Section */}
      <div className="flex-1 flex sm:justify-start justify-start">
  <Link to="/" className="w-[124px] h-[32px] flex items-center sm:ml-8 ml-0">
    <img
      src={logo}
      alt="Happy Motors"
      className="w-[144px] h-[80px]"
      style={{
        filter: darkMode ? 'brightness(0) invert(1)' : 'none', // Adjust logo for dark mode
      }}
    />
  </Link>
</div>


      {/* Desktop Navigation Links */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
  {navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`font-poppins font-normal cursor-pointer px-4 text-[16px] ${
        index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
      } ${
        location.pathname === `/${nav.id}` || (nav.id === 'home' && location.pathname === '/')
          ? 'text-blue-600' // Blue color for active nav item
          : darkMode
          ? 'text-gray-300 hover:text-blue-400'
          : 'text-gray-800 hover:text-blue-600'
      } transition-colors duration-300`}
    >
      {nav.id === 'servicesHome' ? (
        <Link to="/all-services">{nav.title}</Link>
      ) : nav.id === 'contactus' ? (
        <Link to="/contact">{nav.title}</Link>
      ) : location.pathname === '/' && nav.id !== 'home' ? (
        <a href={`#${nav.id}`}>{nav.title}</a>
      ) : (
        <Link to={`/${nav.id}`}>{nav.title}</Link>
      )}
    </li>
  ))}
</ul>


      {/* Right Section: Social Media Icons, Theme Toggle, and Hamburger Menu */}
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
          className={`ml-6 w-20 h-8 flex items-center rounded-full p-1 relative transition-all duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}
        >
          <FaSun
            className={`absolute left-2 transform ${darkMode ? 'text-gray-400' : 'text-yellow-500 scale-110'} transition-transform`}
            size={16}
          />
          <FaMoon
            className={`absolute right-2 transform ${darkMode ? 'text-gray-300 scale-110' : 'text-gray-500'} transition-transform`}
            size={16}
          />
          <div
            className={`w-6 h-6 rounded-full bg-white transform ${darkMode ? 'translate-x-10' : 'translate-x-0'} transition-transform`}
          ></div>
        </button>

        {/* Hamburger Menu Icon */}
       

<div
  className="sm:hidden ml-6 cursor-pointer"
  onClick={() => setToggle((prev) => !prev)}
>
  {toggle ? (
    <FaTimes
      size={28}
      style={{
        color: darkMode ? 'white' : 'black', // White in dark mode, black in light mode
      }}
    />
  ) : (
    <FaBars
      size={28}
      style={{
        color: darkMode ? 'white' : 'black', // White in dark mode, black in light mode
      }}
    />
  )}
</div>

      </div>

      {/* Mobile Sidebar */}
      <div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } text-white`}
            >
              {location.pathname === '/' && nav.id !== 'home' ? (
                <a href={`#${nav.id}`}>{nav.title}</a>
              ) : (
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
