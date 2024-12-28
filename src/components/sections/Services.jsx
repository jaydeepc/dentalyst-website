import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { MdCleaningServices, MdMedicalServices } from 'react-icons/md';
import { RiSurgicalMaskFill } from 'react-icons/ri';
import Section from '../common/Section';

const services = [
  {
    icon: <MdMedicalServices className="w-8 h-8" />,
    title: 'Dental Consultation',
    description: 'Comprehensive examination and personalized treatment planning for your dental needs.'
  },
  {
    icon: <GiTooth className="w-8 h-8" />,
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic treatment to save damaged or infected teeth.'
  },
  {
    icon: <FaTeeth className="w-8 h-8" />,
    title: 'Dental Braces',
    description: 'Orthodontic solutions for straighter teeth and a beautiful smile.'
  },
  {
    icon: <MdCleaningServices className="w-8 h-8" />,
    title: 'Scaling and Polishing',
    description: 'Professional cleaning to remove plaque and maintain oral hygiene.'
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend seamlessly with your teeth.'
  },
  {
    icon: <RiSurgicalMaskFill className="w-8 h-8" />,
    title: 'Dental Surgery',
    description: 'Expert surgical procedures including extractions and implants.'
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
        {service.icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <Section id="services" className="bg-neutral">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services using the latest technology
            to ensure the best possible care for your oral health.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <a href="/#book" className="btn-primary inline-block">
          Book an Appointment
        </a>
      </motion.div>
    </Section>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Services;
