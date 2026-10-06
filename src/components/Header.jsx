import React, { useState } from 'react';

const Header = ({ t, toggleLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    ['#about', t('About me', '關於我')],
    ['#experiences', t('Experiences', '經歷')],
    ['#education', t('Education', '學歷')],
    ['#projects', t('Projects', '作品')],
  ];

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

          <div className="flex items-center gap-6">
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {links.map(([href, label]) => (
                  <li key={href}><a href={href} className="text-gray-700 hover:text-gray-900 transition-colors">{label}</a></li>
                ))}
              </ul>
            </nav>

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="px-3 py-1 text-sm border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {t('中文', 'EN')}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-900 transition-all"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {links.map(([href, label]) => (
                <li key={href}><a href={href} className="text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>{label}</a></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
