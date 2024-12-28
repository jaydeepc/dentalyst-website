import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiPhone, HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  const topBarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={topBarVariants}
        className="bg-primary text-white py-2"
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HiPhone className="w-4 h-4" />
            <a href="tel:+919902312465" className="text-sm">
              +91 9902312465
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="mailto:dentalystdentalclinic@gmail.com"
              className="text-sm hover:text-primary-light transition-colors"
            >
              dentalystdentalclinic@gmail.com
            </a>
            <a
              href="https://instagram.com/dentalystdentalstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary-light transition-colors"
            >
              @dentalystdentalstudio
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <nav className="container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo/logo.png" alt="Dentalyst Logo" className="h-12" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#book"
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-gray-600" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/#book"
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
