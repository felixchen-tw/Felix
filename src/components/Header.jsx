import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="Felix_ITDWS.png" alt="Logo" />
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About me</a></li>
              {/* <li><a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">Experiences</a></li> */}
              <li><a href="#education" className="text-gray-700 hover:text-gray-900 transition-colors">Education</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a></li>
              <li><a href="#community" className="text-gray-700 hover:text-gray-900 transition-colors">Community</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>About me</a></li>
              {/* <li><a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Experiences</a></li> */}
              <li><a href="#education" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#community" className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;