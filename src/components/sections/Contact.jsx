import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import Section from '../common/Section';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzGVYOJz36niPvITWIkl7QA_VdPLSirSfBG82YpeQDXgWiquxNe5jKHhI4iFKlKq147jQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since no-cors mode doesn't give us response details, we'll assume success
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Booking Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16"
      >
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Book Appointment'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">Appointment request submitted successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </motion.div>

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
