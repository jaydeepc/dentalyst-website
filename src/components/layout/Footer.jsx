import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const contactInfo = [
    {
      icon: <HiPhone className="w-5 h-5" />,
      text: '+91 9902312465',
      href: 'tel:+919902312465'
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      text: 'dentalystdentalclinic@gmail.com',
      href: 'mailto:dentalystdentalclinic@gmail.com'
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      text: '@dentalystdentalstudio',
      href: 'https://instagram.com/dentalystdentalstudio'
    },
    {
      icon: <HiLocationMarker className="w-5 h-5" />,
      text: 'Bala complex, #63, 2nd Main, Tech City layout, Doddathoguru, Electronic City phase1, Bangalore - 560100',
      href: 'https://maps.google.com/?q=Dentalyst+Dental+Studio'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-gradient via-primary-dark to-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.img
              src="/logo/logo-white.png"
              alt="Dentalyst Logo"
              className="h-28 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <p className="text-white/80 mb-6">
              Welcome to Dentalyst Dental Studio! We&apos;re dedicated to providing high-quality dental care in a warm, welcoming environment. With over 12 years of experience, we&apos;re passionate about helping you achieve optimal oral health and a beautiful, confident smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-full"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="mt-1 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </span>
                    <span>{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Dentalyst Dental Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/#privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/#terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
