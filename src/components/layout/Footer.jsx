import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container">
        {/* Map Section */}
        <div className="relative h-96 -mt-24 mb-16 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4937338866534!2d77.70431827515633!3d12.870595087428116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8c1c7f5aa5%3A0x3c0e2e2a8fc8b0e4!2sBala%20Complex%2C%20Tech%20City%20Layout%2C%20Doddathoguru%2C%20Electronic%20City%20Phase%201%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1709140000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dentalyst Location"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="space-y-6">
            <img src="/logo/logo.png" alt="Dentalyst Logo" className="h-12 mb-6" />
            <div className="flex items-start space-x-4">
              <HiLocationMarker className="w-6 h-6 text-primary mt-1" />
              <p className="text-gray-300">
                Bala complex, #63, 2nd Main, Tech City layout, Doddathoguru, 
                Electronic City phase1, Bangalore - 560100
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <HiPhone className="w-6 h-6 text-primary" />
              <a href="tel:+919902312465" className="text-gray-300 hover:text-white transition-colors">
                +91 9902312465
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <HiMail className="w-6 h-6 text-primary" />
              <a href="mailto:dentalystdentalclinic@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                dentalystdentalclinic@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#book" className="text-gray-300 hover:text-white transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div {...fadeInUp} className="space-y-6">
            <h3 className="text-xl font-display font-semibold">Working Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-300">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <a
                href="https://instagram.com/dentalystdentalstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                <span>@dentalystdentalstudio</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dentalyst Dental Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
