import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import Section from '../common/Section';

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiPhone className="w-8 h-8" />,
      title: 'Phone',
      text: '+91 9902312465',
      href: 'tel:+919902312465'
    },
    {
      icon: <HiMail className="w-8 h-8" />,
      title: 'Email',
      text: 'dentalystdentalclinic@gmail.com',
      href: 'mailto:dentalystdentalclinic@gmail.com'
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: 'Instagram',
      text: '@dentalystdentalstudio',
      href: 'https://instagram.com/dentalystdentalstudio'
    },
    {
      icon: <HiLocationMarker className="w-8 h-8" />,
      title: 'Address',
      text: 'Bala complex, #63, 2nd Main, Tech City layout, Doddathoguru, Electronic City phase1, Bangalore - 560100',
      href: 'https://maps.google.com/?q=Dentalyst+Dental+Studio'
    }
  ];

  return (
    <Section id="contact" className="bg-gradient-to-br from-neutral-dark/5 via-neutral to-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
            Contact Us
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
        >
          Get in touch with us for any questions about our services or to schedule an appointment.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.title}
            href={info.href}
            target={info.href.startsWith('http') ? '_blank' : undefined}
            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-primary">{info.title}</h3>
              <p className="text-gray-600">{info.text}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4937340876247!2d77.6947883!3d12.8663397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6cf2b1fcb6e3%3A0x1e5b1b1b1b1b1b1b!2sDentalyst%20Dental%20Studio!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dentalyst Dental Studio Location"
        ></iframe>
      </motion.div>
    </Section>
  );
};

export default Contact;
