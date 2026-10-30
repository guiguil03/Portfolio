import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'À propos', to: 'about' },
    { title: 'Compétences', to: 'skills' },
    { title: 'Projets', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary animate-fade-in-left">
            Guillaume LAFAY
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li
                key={item.to}
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
              >
                <a
                  href={`#${item.to}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div
            className={`overflow-hidden transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ul className="py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <a
                    href={`#${item.to}`}
                    onClick={closeMenu}
                    className="block text-gray-600 hover:text-primary transition-colors py-2"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
