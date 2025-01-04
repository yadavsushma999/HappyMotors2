import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { useTheme } from '../components/ThemeContext'; // Import the ThemeContext

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme(); // Use darkMode and toggleTheme from the ThemeContext
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
  <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

  <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    {navLinks.map((nav, index) => (
      <li
        key={nav.id}
        className={`font-poppins font-normal cursor-pointer px-4 text-[16px] ${
          index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
        } text-white`}
      >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>
    ))}
  </ul>

  <div className="flex flex-1 justify-end items-center">
    {/* Menu Button (Hamburger Icon) */}
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain lg:hidden" // Hide the hamburger icon on large devices
      onClick={() => setToggle((prev) => !prev)}
    />

    {/* Theme Toggle Button */}
    <button
      onClick={toggleTheme}
      className={`py-2 px-4 ml-4 rounded ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>

    {/* Sidebar for mobile */}
    <div
      className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
    >
      <ul className="list-none flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
