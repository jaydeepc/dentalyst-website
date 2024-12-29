import { motion, AnimatePresence } from 'framer-motion';
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
    description: 'Beautiful, natural-looking solutions to restore and enhance your smile with advanced materials and techniques.',
    features: [
      'Metal-free Zirconia crowns',
      'Porcelain veneers',
      'PFM & ceramic crowns',
      'Inlays & Onlays'
    ],
    info: [
      {
        title: 'Understanding Zirconia Crowns',
        image: '/service-examples/crowns-veneers/info/What-is-Zirconia-Crown.jpg',
        description: 'Zirconia crowns are the latest advancement in dental technology, offering exceptional strength and natural aesthetics. These metal-free crowns are biocompatible, highly durable, and look just like natural teeth, making them perfect for both front and back teeth.',
        placeholder: 'Zirconia crown structure and benefits'
      },
      {
        title: 'Types of Dental Crowns',
        image: '/service-examples/crowns-veneers/info/three-types-of-dental-crowns.jpg',
        description: 'Choose from various crown options including all-ceramic, porcelain-fused-to-metal (PFM), and zirconia. Each type has its unique advantages, and we\'ll help you select the best option based on your specific needs, location of the tooth, and aesthetic goals.',
        placeholder: 'Comparison of different crown types'
      },
      {
        title: 'Zirconia vs Traditional Crowns',
        image: '/service-examples/crowns-veneers/info/pfm-vs-zerconia-crowns.jpg',
        description: 'Compared to traditional PFM crowns, zirconia crowns offer superior aesthetics with no dark lines at the gum, better durability, and require less tooth reduction. They\'re also completely metal-free, making them an excellent choice for patients with metal sensitivities.',
        placeholder: 'Side-by-side comparison of crown types'
      },
      {
        title: 'Porcelain Veneers',
        image: '/service-examples/crowns-veneers/info/Porcelain Veneers.jpg',
        description: 'Transform your smile with ultra-thin porcelain veneers. These custom-made shells are bonded to the front of your teeth to improve their appearance. Perfect for fixing discoloration, chips, gaps, or misshapen teeth while preserving your natural tooth structure.',
        placeholder: 'Veneer application and benefits'
      }
    ],
    additionalInfo: `When to Choose Each Option:

Zirconia Crowns:
• Back teeth requiring maximum strength
• Visible teeth needing natural aesthetics
• Patients with metal allergies
• Cases requiring minimal tooth reduction

PFM Crowns:
• Cost-effective full coverage option
• Situations requiring proven durability
• Areas with less aesthetic concern

All-Ceramic Crowns:
• Front teeth requiring maximum aesthetics
• Patients preferring metal-free options
• Cases with adequate tooth structure

Porcelain Veneers:
• Front teeth with cosmetic concerns
• Minor alignment issues
• Discoloration resistant to whitening
• Chips or worn edges`
  },
  {
    icon: <MdMedicalServices className="w-8 h-8" />,
    title: 'Dental Consultation',
    description: 'Comprehensive examination and personalized treatment planning.',
    features: ['Digital X-rays', 'Treatment planning', 'Cost estimates', 'Insurance guidance'],
    info: []
  },
  {
    icon: <GiTooth className="w-8 h-8" />,
    title: 'Root Canal Treatment',
    description: 'Pain-free procedure to save infected teeth using advanced techniques.',
    features: [
      'Modern equipment',
      'Painless procedure',
      'Single visit possible',
      'Long-term solution',
      'Digital X-rays',
      'Advanced sterilization'
    ],
    info: [
      {
        title: 'Understanding Root Canal Treatment',
        image: '/service-examples/root-canal/info/what-is-root-canal-treatment.jpg',
        description: 'Root canal treatment is a dental procedure that saves severely damaged or infected teeth. Instead of removing the tooth, we clean out the infected pulp, disinfect the canals, and seal them to prevent future infections. This preserves your natural tooth and maintains your smile. Modern techniques make the procedure virtually painless.',
        placeholder: 'Root canal treatment overview'
      },
      {
        title: 'Step-by-Step Treatment Process',
        image: '/service-examples/root-canal/info/root-canal-treatment-procedure-step-by-step.jpg',
        description: 'Our root canal procedure follows precise steps for optimal results: 1) Digital X-rays and examination to assess the infection, 2) Local anesthesia for complete comfort, 3) Removal of infected pulp, 4) Thorough cleaning and shaping of canals, 5) Filling with biocompatible material, 6) Final restoration with a crown for protection.',
        placeholder: 'Treatment procedure steps'
      }
    ],
    additionalInfo: `What You Need to Know About Root Canal Treatment:

When Is Root Canal Needed?
• Severe tooth decay reaching the pulp
• Cracked or broken teeth
• Repeated dental procedures on the tooth
• Deep cavities
• Trauma to the tooth

Benefits of Root Canal Treatment:
• Saves your natural tooth
• Eliminates pain and infection
• Restores normal bite and chewing
• Protects surrounding teeth
• Cost-effective compared to extraction and replacement

What to Expect:
• Treatment typically takes 1-2 visits
• Local anesthesia ensures comfort
• Recovery is usually quick
• Normal activities can resume immediately
• Minor sensitivity may occur briefly

Post-Treatment Care:
• Avoid chewing on treated tooth until restored
• Maintain good oral hygiene
• Regular dental check-ups
• Final crown placement as recommended
• Long-term success with proper care

Why Choose Modern Root Canal Treatment:
• Advanced imaging technology
• Precise microscopic treatment
• Better cleaning techniques
• Improved comfort
• Higher success rates
• Faster recovery time`
  },
  {
    icon: <FaTeeth className="w-8 h-8" />,
    title: 'Dental Braces',
    description: 'Orthodontic solutions for a perfectly aligned smile.',
    features: ['Metal & ceramic braces', 'Clear aligners', 'Regular adjustments', 'Retainer options'],
    info: [
      {
        title: 'Traditional Metal Braces: Time-Tested Solution',
        image: '/service-examples/braces/info/Metal-Vs-Ceramic-braces.webp',
        description: 'Metal braces have helped millions achieve beautiful smiles! These small metal brackets are like tiny guides for your teeth, gently moving them into their perfect positions. While they\'re visible, many of our younger patients love personalizing them with colored bands to match their style. They\'re strong, reliable, and often the fastest way to get that straight smile you\'ve always wanted.',
        placeholder: 'Comparison of metal and ceramic braces'
      },
      {
        title: 'Invisible Ways to Your Perfect Smile',
        image: '/service-examples/braces/info/clear-aligners.jpg',
        description: 'Want straighter teeth without everyone knowing you\'re wearing braces? We offer two amazing options! Ceramic braces work just like metal ones but blend in with your natural tooth color - perfect if you want to be subtle. Clear aligners are like invisible trays that you can remove when eating or for special occasions. Many of our adult patients love these options because they can straighten their teeth without affecting their professional appearance.',
        placeholder: 'Clear aligner treatment process'
      }
    ],
    additionalInfo: `Your Guide to Choosing the Right Braces:

Metal Braces - Perfect For:
• Getting the fastest results possible
• Kids and teens who want to have fun with colored bands
• Fixing more complex smile issues
• Families looking for a budget-friendly option
• Those who want the most reliable option

Ceramic Braces - Great Choice If:
• You want braces that are less noticeable
• You're looking for a balance between visibility and effectiveness
• You have important events coming up (like weddings or presentations)
• You want the reliability of traditional braces with better aesthetics
• You're an adult seeking professional-looking treatment

Clear Aligners - Ideal When:
• You want the most discreet treatment option
• You enjoy the flexibility of removing them for meals
• You have mild to moderate alignment needs
• You play contact sports or musical instruments
• You want the easiest option for keeping teeth clean

What to Expect During Treatment:
• Your journey typically takes 12-24 months, depending on your needs
• We'll see you every 4-6 weeks to check your progress
• You'll notice improvements within the first few months
• We'll teach you special cleaning techniques for your braces
• After treatment, you'll wear a retainer to keep your new smile perfect

Remember:
• Every smile is unique - we'll help you choose what's best for you
• Modern braces are more comfortable than ever before
• The temporary adjustments are worth the lifetime of confidence
• Regular dental hygiene is extra important during treatment
• Your beautiful new smile will be worth the journey!`
  },
  {
    icon: <MdCleaningServices className="w-8 h-8" />,
    title: 'Scaling and Polishing',
    description: 'Professional cleaning for optimal oral hygiene.',
    features: ['Deep cleaning', 'Stain removal', 'Gum health care', 'Fresh breath'],
    info: []
  },
  {
    icon: <FaTooth className="w-8 h-8" />,
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend perfectly.',
    features: ['Invisible repairs', 'Durable material', 'Immediate results', 'Preserves tooth'],
    info: []
  },
  {
    icon: <RiSurgicalMaskFill className="w-8 h-8" />,
    title: 'Dental Surgery',
    description: 'Expert surgical procedures with focus on comfort.',
    features: ['Wisdom tooth removal', 'Dental implants', 'Bone grafting', 'Surgical extractions'],
    info: []
  },
  {
    icon: <TbDental className="w-8 h-8" />,
    title: 'Dentures',
    description: 'Custom-made replacements for a natural-looking smile.',
    features: ['Full dentures', 'Partial dentures', 'Custom fitting', 'Natural look'],
    info: []
  },
  {
    icon: <IoColorPaletteOutline className="w-8 h-8" />,
    title: 'Tooth Whitening',
    description: 'Professional whitening for a brighter smile.',
    features: ['Safe procedure', 'Quick results', 'Long-lasting', 'Custom trays'],
    info: []
  },
  {
    icon: <RiMentalHealthLine className="w-8 h-8" />,
    title: 'Preventive Care',
    description: 'Regular maintenance for long-term oral health.',
    features: ['Regular check-ups', 'Fluoride treatment', 'Oral hygiene tips', 'Early detection'],
    info: []
  }
];

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
                <p className="text-gray-600 text-sm">{item.description}</p>
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
                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-4">When Is Root Canal Needed?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Severe tooth decay reaching the pulp',
                      'Cracked or broken teeth',
                      'Repeated dental procedures on the tooth',
                      'Deep cavities',
                      'Trauma to the tooth'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-4">Benefits of Root Canal Treatment</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Saves your natural tooth',
                      'Eliminates pain and infection',
                      'Restores normal bite and chewing',
                      'Protects surrounding teeth',
                      'Cost-effective compared to extraction and replacement'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-4">What to Expect</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Treatment typically takes 1-2 visits',
                      'Local anesthesia ensures comfort',
                      'Recovery is usually quick',
                      'Normal activities can resume immediately',
                      'Minor sensitivity may occur briefly'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-4">Post-Treatment Care</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Avoid chewing on treated tooth until restored',
                      'Maintain good oral hygiene',
                      'Regular dental check-ups',
                      'Final crown placement as recommended',
                      'Long-term success with proper care'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-display font-bold text-primary mb-4">Why Choose Modern Root Canal Treatment</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Advanced imaging technology',
                      'Precise microscopic treatment',
                      'Better cleaning techniques',
                      'Improved comfort',
                      'Higher success rates',
                      'Faster recovery time'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-primary" />
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
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
    additionalInfo: PropTypes.string,
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
