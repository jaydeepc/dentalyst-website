 import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { MdMedicalServices } from 'react-icons/md';
import { RiMentalHealthLine } from 'react-icons/ri';
import { TbDental, TbCrown } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';
import Section from '../common/Section';
import { services } from './servicesData';

const CrownTypeCard = ({ title, features, icon: Icon, color }) => (
  <div className={`bg-${color}/5 rounded-xl p-6 border border-${color}/10 hover:border-${color}/20 transition-colors duration-300`}>
    <div className={`w-12 h-12 rounded-lg bg-${color}/10 flex items-center justify-center text-${color} mb-4`}>
      <Icon className="w-6 h-6" />
    </div>
    <h5 className="text-lg font-semibold text-gray-800 mb-3">{title}</h5>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-sm text-gray-600">
          <svg className={`w-5 h-5 mr-2 flex-shrink-0 text-${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

CrownTypeCard.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string.isRequired,
};

const ServiceCard = ({ service, index, onShowInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1"
      onClick={() => onShowInfo(service)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 group-hover:from-primary/10 group-hover:via-secondary/10 group-hover:to-accent/10 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-br-full transform -translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 via-transparent to-transparent rounded-tl-full transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
      
      <div className="relative p-8 z-10">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-500" />
          <div className="relative w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {service.icon}
          </div>
        </div>

        <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-primary-dark transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

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

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

const InfoModal = ({ service, onClose }) => {
  const bracesTypes = service.title === 'Dental Braces' ? [
    {
      title: 'Traditional Metal',
      icon: FaTeeth,
      color: 'primary',
      features: [
        'Most effective for complex cases',
        'Fastest treatment time',
        'Fun colored bands for personalization',
        'Most affordable option'
      ]
    },
    {
      title: 'Ceramic Braces',
      icon: TbDental,
      color: 'secondary',
      features: [
        'Tooth-colored brackets',
        'Less noticeable than metal',
        'Great for photos & occasions',
        'Professional appearance'
      ]
    },
    {
      title: 'Clear Aligners',
      icon: IoColorPaletteOutline,
      color: 'accent',
      features: [
        'Nearly invisible treatment',
        'Removable for eating & cleaning',
        'No food restrictions',
        'Comfortable to wear'
      ]
    }
  ] : [
    {
      title: 'Zirconia Crowns',
      icon: TbCrown,
      color: 'primary',
      features: [
        'Back teeth requiring maximum strength',
        'Visible teeth needing natural aesthetics',
        'Patients with metal allergies',
        'Cases requiring minimal tooth reduction'
      ]
    },
    {
      title: 'PFM Crowns',
      icon: FaTooth,
      color: 'secondary',
      features: [
        'Cost-effective full coverage option',
        'Situations requiring proven durability',
        'Areas with less aesthetic concern'
      ]
    },
    {
      title: 'All-Ceramic Crowns',
      icon: GiTooth,
      color: 'accent',
      features: [
        'Front teeth requiring maximum aesthetics',
        'Patients preferring metal-free options',
        'Cases with adequate tooth structure'
      ]
    },
    {
      title: 'Porcelain Veneers',
      icon: IoColorPaletteOutline,
      color: 'primary',
      features: [
        'Front teeth with cosmetic concerns',
        'Minor alignment issues',
        'Discoloration resistant to whitening',
        'Chips or worn edges'
      ]
    }
  ];

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
        className="relative bg-white rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <p className="text-gray-600 text-sm whitespace-pre-line">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {service.additionalInfo && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            {service.title === 'Dental Braces' || service.title === 'Crowns & Veneers' ? (
              <>
                <h4 className="text-xl font-display font-bold text-primary mb-6">
                  {service.title === 'Dental Braces' ? 'Your Guide to Different Braces Options' : 'When to Choose Each Option'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bracesTypes.map((type, index) => (
                    <motion.div
                      key={type.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CrownTypeCard {...type} />
                    </motion.div>
                  ))}
                </div>

                {service.title === 'Dental Braces' ? (
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left font-semibold text-gray-600">Feature</th>
                          <th className="px-4 py-3 text-center font-semibold text-primary">Metal Braces</th>
                          <th className="px-4 py-3 text-center font-semibold text-secondary">Ceramic Braces</th>
                          <th className="px-4 py-3 text-center font-semibold text-accent">Clear Aligners</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Treatment Time</td>
                          <td className="px-4 py-3 text-center text-primary">12-24 months</td>
                          <td className="px-4 py-3 text-center text-secondary">12-24 months</td>
                          <td className="px-4 py-3 text-center text-accent">12-18 months*</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Visibility</td>
                          <td className="px-4 py-3 text-center text-primary">Most visible</td>
                          <td className="px-4 py-3 text-center text-secondary">Less visible</td>
                          <td className="px-4 py-3 text-center text-accent">Nearly invisible</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Maintenance</td>
                          <td className="px-4 py-3 text-center text-primary">Regular cleaning</td>
                          <td className="px-4 py-3 text-center text-secondary">Extra care needed</td>
                          <td className="px-4 py-3 text-center text-accent">Easy to clean</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Food Restrictions</td>
                          <td className="px-4 py-3 text-center text-primary">Yes</td>
                          <td className="px-4 py-3 text-center text-secondary">Yes</td>
                          <td className="px-4 py-3 text-center text-accent">No</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Best For</td>
                          <td className="px-4 py-3 text-center text-primary">Complex cases</td>
                          <td className="px-4 py-3 text-center text-secondary">Aesthetic needs</td>
                          <td className="px-4 py-3 text-center text-accent">Mild-moderate cases</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-2">*Treatment time varies based on compliance with wearing aligners 20-22 hours per day</p>
                  </div>
                ) : (
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left font-semibold text-gray-600">Feature</th>
                          <th className="px-4 py-3 text-center font-semibold text-primary">Zirconia</th>
                          <th className="px-4 py-3 text-center font-semibold text-secondary">PFM</th>
                          <th className="px-4 py-3 text-center font-semibold text-accent">All-Ceramic</th>
                          <th className="px-4 py-3 text-center font-semibold text-primary">Veneers</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Strength</td>
                          <td className="px-4 py-3 text-center text-primary">Excellent</td>
                          <td className="px-4 py-3 text-center text-secondary">Very Good</td>
                          <td className="px-4 py-3 text-center text-accent">Good</td>
                          <td className="px-4 py-3 text-center text-primary">Moderate</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Aesthetics</td>
                          <td className="px-4 py-3 text-center text-primary">Excellent</td>
                          <td className="px-4 py-3 text-center text-secondary">Good</td>
                          <td className="px-4 py-3 text-center text-accent">Excellent</td>
                          <td className="px-4 py-3 text-center text-primary">Excellent</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Tooth Reduction</td>
                          <td className="px-4 py-3 text-center text-primary">Minimal</td>
                          <td className="px-4 py-3 text-center text-secondary">Moderate</td>
                          <td className="px-4 py-3 text-center text-accent">Moderate</td>
                          <td className="px-4 py-3 text-center text-primary">Minimal</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-gray-600">Cost</td>
                          <td className="px-4 py-3 text-center text-primary">Higher</td>
                          <td className="px-4 py-3 text-center text-secondary">Moderate</td>
                          <td className="px-4 py-3 text-center text-accent">Higher</td>
                          <td className="px-4 py-3 text-center text-primary">Moderate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            ) : service.title === 'Root Canal Treatment' ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-primary/5 rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <GiTooth className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">When Is Root Canal Needed?</h5>
                    <ul className="space-y-2">
                      {[
                        'Severe tooth decay reaching the pulp',
                        'Cracked or broken teeth',
                        'Repeated dental procedures',
                        'Deep cavities',
                        'Trauma to the tooth'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary/5 rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <FaTooth className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Benefits of Treatment</h5>
                    <ul className="space-y-2">
                      {[
                        'Saves your natural tooth',
                        'Eliminates pain and infection',
                        'Restores normal bite',
                        'Protects surrounding teeth',
                        'Cost-effective solution'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-accent/5 rounded-xl p-6 border border-accent/10 hover:border-accent/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <MdMedicalServices className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">What to Expect</h5>
                    <ul className="space-y-2">
                      {[
                        '1-2 visits typically needed',
                        'Local anesthesia for comfort',
                        'Quick recovery time',
                        'Resume normal activities',
                        'Minimal sensitivity after'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-primary/5 rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <RiMentalHealthLine className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Post-Treatment Care</h5>
                    <ul className="space-y-2">
                      {[
                        'Avoid chewing until restored',
                        'Maintain good oral hygiene',
                        'Regular check-ups',
                        'Final crown placement',
                        'Long-term success with care'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-secondary/5 rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                      <TbCrown className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-3">Modern Technology</h5>
                    <ul className="space-y-2">
                      {[
                        'Advanced imaging tech',
                        'Microscopic precision',
                        'Better cleaning methods',
                        'Improved comfort',
                        'Higher success rates',
                        'Fast recovery time'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-5 h-5 mr-2 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            ) : Array.isArray(service.additionalInfo) ? (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.additionalInfo.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center text-primary mb-4">
                        {section.icon === 'clipboard-list' && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        )}
                        {section.icon === 'search' && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        )}
                        {section.icon === 'chart-bar' && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                        {section.icon === 'credit-card' && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        )}
                        {section.icon === 'calendar' && (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">{section.title}</h5>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className="w-5 h-5 mr-2 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-gray-600 text-sm">
                {service.additionalInfo}
              </div>
            )}
          </div>
        )}

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
    additionalInfo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string).isRequired
      }))
    ]),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Section id="services" className="relative bg-gradient-to-br from-neutral-dark/5 via-neutral to-white">
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

        <AnimatePresence>
          {selectedService && (
            <InfoModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Services;
