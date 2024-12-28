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
    <header className="fixed w-full z-50 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
      {/* Top Bar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={topBarVariants}
        className="bg-primary-dark/50 backdrop-blur-sm text-white py-2"
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
              className="text-sm hover:text-white/80 transition-colors"
            >
              dentalystdentalclinic@gmail.com
            </a>
            <a
              href="https://instagram.com/dentalystdentalstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white/80 transition-colors"
            >
              @dentalystdentalstudio
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.nav className="container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img 
              src="/logo/logo.png" 
              alt="Dentalyst Logo" 
              className="h-16 md:h-20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white font-medium transition-all hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#book"
              className="btn bg-white text-primary hover:bg-white/90 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <HiX className="w-7 h-7 text-white" />
            ) : (
              <HiMenu className="w-7 h-7 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-primary to-primary-dark backdrop-blur-lg shadow-2xl p-8"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white font-medium transition-all hover:translate-x-2 flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="/#book"
                  className="btn bg-white text-primary hover:bg-white/90 text-center mt-4 transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Header;
