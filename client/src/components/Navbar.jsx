import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 py-2.5 dark:bg-gray-900 dark:border-gray-700 transition duration-500 ease-in-out">
        <div className="flex justify-between items-center max-w-screen-xl px-4 mx-auto">
          
          {/* Hamburger Icon for Mobile (Now Before Logo) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 focus:outline-none">
              {isOpen ? '✖️' : '☰'}
            </button>
          </div>

          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SPIT Connect Logo" className="h-10 mr-2" />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">WebCollab</span>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex justify-center space-x-6">
            <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/teams" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Teams</Link>
            <Link to="/profile" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Profile</Link>
          </div>

          {/* Right Section: Theme Toggle and Login */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login" className="text-gray-600 dark:text-gray-300 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Login</Link>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="flex flex-col items-center md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition duration-500 ease-in-out">
            <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 py-2 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/teams" className="text-gray-600 dark:text-gray-300 py-2 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Teams</Link>
            <Link to="/events" className="text-gray-600 dark:text-gray-300 py-2 transition duration-300 ease-in-out hover:text-blue-600 dark:hover:text-blue-400">Profile</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
