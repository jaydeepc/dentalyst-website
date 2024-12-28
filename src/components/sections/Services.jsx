import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { MdCleaningServices, MdMedicalServices } from 'react-icons/md';
import { RiSurgicalMaskFill, RiMentalHealthLine } from 'react-icons/ri';
import { TbDental, TbDentalBroken } from 'react-icons/tb';
import Section from '../common/Section';

const services = [
  {
    icon: <MdMedicalServices className="w-8 h-8" />,
    title: 'Dental Consultation',
    description: 'Comprehensive examination and personalized treatment planning for your dental needs.',
    features: ['Oral health assessment', 'Digital X-rays', 'Treatment planning']
  },
  {
    icon: <GiTooth className="w-8 h-8" />,
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic treatment to save damaged or infected teeth.',
    features: ['Pain-free procedure', 'Modern techniques', 'High success rate']
  },
  {
    icon: <FaTeeth className="w-8 h-8" />,
    title: 'Dental Braces',
    description: 'Orthodontic solutions for straighter teeth and a beautiful smile.',
    features: ['Metal & ceramic braces', 'Clear aligners', 'Regular adjustments']
  },
  {
    icon: <MdCleaningServices className="w-8 h-8" />,
    title: 'Scaling and Polishing',
    description: 'Professional cleaning to remove plaque and maintain oral hygiene.',
    features: ['Deep cleaning', 'Stain removal', 'Gum health maintenance']
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend seamlessly with your teeth.',
    features: ['Composite materials', 'Invisible repairs', 'Long-lasting results']
  },
  {
    icon: <RiSurgicalMaskFill className="w-8 h-8" />,
    title: 'Dental Surgery',
    description: 'Expert surgical procedures including extractions and implants.',
    features: ['Wisdom tooth removal', 'Dental implants', 'Bone grafting']
  },
  {
    icon: <TbDental className="w-8 h-8" />,
    title: 'Dentures',
    description: 'Custom-made replacements for missing teeth to restore your smile.',
    features: ['Full & partial dentures', 'Custom fitting', 'Natural appearance']
  },
  {
    icon: <TbDentalBroken className="w-8 h-8" />,
    title: 'Dentures Repair',
    description: 'Quick and reliable repairs for damaged or broken dentures.',
    features: ['Same-day service', 'Professional repair', 'Quality materials']
  },
  {
    icon: <RiMentalHealthLine className="w-8 h-8" />,
    title: 'Preventive Care',
    description: 'Regular check-ups and maintenance for optimal oral health.',
    features: ['Regular check-ups', 'Fluoride treatment', 'Oral cancer screening']
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500" />
      <div className="relative p-6 z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-display font-semibold mb-3 text-primary">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center text-sm text-gray-600 hover:text-gray-800"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-accent mr-2" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Services = () => {
  return (
    <Section id="services" className="relative bg-gradient-to-br from-neutral-dark/5 via-neutral to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.primary.light/0.03)_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
              Our Services
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-6"
          >
            We offer a comprehensive range of dental services using the latest technology
            to ensure the best possible care for your oral health.
          </motion.p>
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
          className="text-center mt-16"
        >
          <a
            href="/#book"
            className="btn-primary inline-block bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Book an Appointment
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Services;
