import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary"
          >
            Guillaume LAFAY 
          </motion.div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              </motion.li>
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <ul className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      className="block text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
