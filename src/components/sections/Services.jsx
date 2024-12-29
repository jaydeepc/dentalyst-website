import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { MdCleaningServices, MdMedicalServices } from 'react-icons/md';
import { RiSurgicalMaskFill, RiMentalHealthLine } from 'react-icons/ri';
import { TbDental, TbCrown } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';
import Section from '../common/Section';

const services = [
  {
    icon: <TbCrown className="w-8 h-8" />,
    title: 'Crowns & Veneers',
    description: 'Beautiful, natural-looking solutions to restore and enhance your smile.',
    features: [
      'Metal-free Zirconia crowns',
      'Porcelain veneers',
      'Ceramic crowns',
      'Inlays & Onlays'
    ],
    info: [
      {
        title: 'Zirconia Crowns',
        image: '/service-examples/crowns-veneers/info/crowns_info_zirconia.jpg',
        description: 'Metal-free, highly durable crowns that look completely natural. Perfect for both front and back teeth.',
        placeholder: 'Zirconia crown comparison with natural teeth'
      },
      {
        title: 'Porcelain Veneers',
        image: '/service-examples/crowns-veneers/info/crowns_info_veneers.jpg',
        description: 'Ultra-thin porcelain shells that transform your smile by covering imperfections.',
        placeholder: 'Veneer application demonstration'
      },
      {
        title: 'Types of Crowns',
        image: '/service-examples/crowns-veneers/info/crowns_info_types.jpg',
        description: 'Different crown options including ceramic, metal, and combination crowns to suit your needs.',
        placeholder: 'Visual comparison of crown types'
      }
    ]
  },
  {
    icon: <MdMedicalServices className="w-8 h-8" />,
    title: 'Dental Consultation',
    description: 'Comprehensive examination and personalized treatment planning for your dental needs.',
    features: [
      'Digital X-rays',
      'Treatment planning',
      'Cost estimates',
      'Insurance guidance'
    ],
    info: [
      {
        title: 'Modern Diagnostics',
        image: '/service-examples/consultation/info/consultation_info_xray.jpg',
        description: 'State-of-the-art digital X-rays for accurate diagnosis with minimal radiation.',
        placeholder: 'Digital X-ray equipment in use'
      },
      {
        title: 'Treatment Planning',
        image: '/service-examples/consultation/info/consultation_info_planning.jpg',
        description: 'Detailed discussion of treatment options and creating your personalized care plan.',
        placeholder: 'Doctor explaining treatment options'
      }
    ]
  },
  {
    icon: <GiTooth className="w-8 h-8" />,
    title: 'Root Canal Treatment',
    description: 'Pain-free procedure to save infected teeth using advanced techniques.',
    features: [
      'Modern equipment',
      'Painless procedure',
      'Single visit possible',
      'Long-term solution'
    ],
    info: [
      {
        title: 'Modern Root Canal',
        image: '/service-examples/root-canal/info/root-canal_info_procedure.jpg',
        description: 'Advanced techniques and equipment make root canals comfortable and efficient.',
        placeholder: 'Root canal procedure diagram'
      },
      {
        title: 'Why Root Canal?',
        image: '/service-examples/root-canal/info/root-canal_info_education.jpg',
        description: 'Understanding when and why root canal treatment is necessary to save your tooth.',
        placeholder: 'Educational diagram about root canal need'
      }
    ]
  },
  {
    icon: <FaTeeth className="w-8 h-8" />,
    title: 'Dental Braces',
    description: 'Orthodontic solutions for a perfectly aligned smile.',
    features: [
      'Metal & ceramic braces',
      'Clear aligners',
      'Regular adjustments',
      'Retainer options'
    ],
    info: [
      {
        title: 'Types of Braces',
        image: '/service-examples/braces/info/braces_info_types.jpg',
        description: 'Different orthodontic options to suit your lifestyle and preferences.',
        placeholder: 'Comparison of different brace types'
      },
      {
        title: 'Treatment Process',
        image: '/service-examples/braces/info/braces_info_process.jpg',
        description: 'Understanding the steps involved in achieving your perfect smile.',
        placeholder: 'Orthodontic treatment timeline'
      }
    ]
  },
  {
    icon: <MdCleaningServices className="w-8 h-8" />,
    title: 'Scaling and Polishing',
    description: 'Professional cleaning for optimal oral hygiene.',
    features: [
      'Plaque removal',
      'Stain removal',
      'Gum health care',
      'Fresh breath'
    ],
    info: [
      {
        title: 'Deep Cleaning',
        image: '/service-examples/cleaning/info/cleaning_info_process.jpg',
        description: 'Professional cleaning reaches areas that regular brushing cannot.',
        placeholder: 'Professional cleaning demonstration'
      },
      {
        title: 'Healthy Gums',
        image: '/service-examples/cleaning/info/cleaning_info_health.jpg',
        description: 'Regular cleaning is essential for maintaining healthy gums and preventing disease.',
        placeholder: 'Gum health education diagram'
      }
    ]
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend perfectly with your teeth.',
    features: [
      'Invisible repairs',
      'Durable material',
      'Immediate results',
      'Preserves tooth'
    ],
    info: [
      {
        title: 'Modern Materials',
        image: '/service-examples/fillings/info/fillings_info_materials.jpg',
        description: 'High-quality composite materials that match your natural tooth color.',
        placeholder: 'Composite filling materials display'
      },
      {
        title: 'Seamless Results',
        image: '/service-examples/fillings/info/fillings_info_natural.jpg',
        description: 'Fillings that are virtually invisible and restore tooth function.',
        placeholder: 'Natural-looking filling example'
      }
    ]
  },
  {
    icon: <RiSurgicalMaskFill className="w-8 h-8" />,
    title: 'Dental Surgery',
    description: 'Expert surgical procedures with focus on comfort and recovery.',
    features: [
      'Wisdom tooth removal',
      'Dental implants',
      'Bone grafting',
      'Surgical extractions'
    ],
    info: [
      {
        title: 'Modern Surgery',
        image: '/service-examples/surgery/info/surgery_info_facility.jpg',
        description: 'State-of-the-art surgical facility with advanced equipment.',
        placeholder: 'Modern surgical setup'
      },
      {
        title: 'Implant Process',
        image: '/service-examples/surgery/info/surgery_info_implant.jpg',
        description: 'Understanding the dental implant procedure and benefits.',
        placeholder: 'Dental implant procedure diagram'
      }
    ]
  },
  {
    icon: <TbDental className="w-8 h-8" />,
    title: 'Dentures',
    description: 'Custom-made replacements for a natural-looking smile.',
    features: [
      'Full dentures',
      'Partial dentures',
      'Custom fitting',
      'Natural look'
    ],
    info: [
      {
        title: 'Denture Options',
        image: '/service-examples/dentures/info/dentures_info_types.jpg',
        description: 'Different types of dentures to suit your specific needs.',
        placeholder: 'Types of dentures comparison'
      },
      {
        title: 'Custom Fitting',
        image: '/service-examples/dentures/info/dentures_info_fitting.jpg',
        description: 'Precise fitting process for maximum comfort and function.',
        placeholder: 'Denture fitting process'
      }
    ]
  },
  {
    icon: <IoColorPaletteOutline className="w-8 h-8" />,
    title: 'Tooth Whitening',
    description: 'Professional whitening for a brighter, more confident smile.',
    features: [
      'Safe procedure',
      'Quick results',
      'Long-lasting',
      'Custom trays'
    ],
    info: [
      {
        title: 'Professional Whitening',
        image: '/service-examples/whitening/info/whitening_info_process.jpg',
        description: 'Safe and effective professional whitening process.',
        placeholder: 'Whitening procedure setup'
      },
      {
        title: 'Lasting Results',
        image: '/service-examples/whitening/info/whitening_info_care.jpg',
        description: 'Tips for maintaining your bright smile after treatment.',
        placeholder: 'Whitening maintenance guide'
      }
    ]
  },
  {
    icon: <RiMentalHealthLine className="w-8 h-8" />,
    title: 'Preventive Care',
    description: 'Regular maintenance for long-term oral health.',
    features: [
      'Regular check-ups',
      'Fluoride treatment',
      'Oral hygiene tips',
      'Early detection'
    ],
    info: [
      {
        title: 'Prevention First',
        image: '/service-examples/preventive/info/preventive_info_checkup.jpg',
        description: 'Regular check-ups help prevent serious dental issues.',
        placeholder: 'Regular check-up process'
      },
      {
        title: 'Home Care',
        image: '/service-examples/preventive/info/preventive_info_hygiene.jpg',
        description: 'Essential tips for maintaining good oral hygiene at home.',
        placeholder: 'Oral hygiene instruction guide'
      }
    ]
  }
];

const ServiceCard = ({ service, index, onShowInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1"
      onClick={() => onShowInfo(service)}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-tl-full transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
      
      <div className="relative p-8 z-10">
        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-500" />
          <div className="relative w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-primary-dark transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent blur-sm" />
                <div className="relative w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mr-3 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Learn More Button */}
        <div className="mt-8 flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors duration-300">
          <span className="mr-2">Learn more about this service</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const InfoModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/50 rounded-full p-2 hover:bg-white/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center text-primary">
            {service.icon}
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-primary">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.info.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm text-center p-4">
                  {item.placeholder}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-primary mb-3">Key Features:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onShowInfo: PropTypes.func.isRequired,
};

InfoModal.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

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
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onShowInfo={() => setSelectedService(service)}
            />
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

        {/* Info Modal */}
        {selectedService && (
          <InfoModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </Section>
  );
};

export default Services;
