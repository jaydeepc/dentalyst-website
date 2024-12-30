import { FaTooth, FaTeeth } from 'react-icons/fa';
import { MdCleaningServices, MdMedicalServices } from 'react-icons/md';
import { RiSurgicalMaskFill, RiMentalHealthLine } from 'react-icons/ri';
import { TbDental, TbCrown } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';
import React from 'react';

export const services = [
  {
    icon: React.createElement(FaTeeth, { className: "w-8 h-8" }),
    title: 'Braces',
    description: 'Advanced orthodontic solutions for a perfectly aligned smile.',
    features: [
      'Metal & Ceramic braces',
      'Clear aligners',
      'Retainers',
      'Bite correction'
    ],
    info: [
      {
        title: 'Types of Braces',
        image: '/service-examples/braces/info/Metal-Vs-Ceramic-braces.webp',
        description: 'Choose from traditional metal braces, more discreet ceramic options, or nearly invisible clear aligners. Each type has its advantages, and we\'ll help you select the best option based on your specific needs and lifestyle.',
        placeholder: 'Different types of braces'
      },
      {
        title: 'Clear Aligners',
        image: '/service-examples/braces/info/clear-aligners.jpg',
        description: 'Clear aligners offer a virtually invisible way to straighten your teeth. These custom-made, removable trays gradually shift your teeth into proper alignment while allowing you to maintain your regular oral hygiene routine and enjoy your favorite foods.',
        placeholder: 'Clear aligner treatment'
      }
    ],
    comparison: {
      headers: ['Features', 'Metal Braces', 'Ceramic Braces', 'Clear Aligners'],
      rows: [
        {
          feature: 'Visibility',
          values: [
            'Most noticeable, silver/gray colored brackets',
            'Less noticeable, tooth-colored brackets',
            'Nearly invisible clear plastic aligners'
          ]
        },
        {
          feature: 'Cost',
          values: [
            '$3,000 - $6,000',
            '$4,000 - $8,000',
            '$4,000 - $7,400'
          ]
        },
        {
          feature: 'Treatment Time',
          values: [
            '18-36 months',
            '18-36 months',
            '12-18 months for most cases'
          ]
        },
        {
          feature: 'Effectiveness',
          values: [
            'Highly effective for all cases',
            'Very effective for most cases',
            'Effective for mild to moderate cases'
          ]
        },
        {
          feature: 'Maintenance',
          values: [
            'Regular adjustments every 4-6 weeks',
            'Regular adjustments every 4-6 weeks',
            'New aligners every 1-2 weeks'
          ]
        },
        {
          feature: 'Comfort',
          values: [
            'Initial discomfort, may irritate cheeks',
            'Similar to metal but smoother feel',
            'Most comfortable, minimal irritation'
          ]
        },
        {
          feature: 'Food Restrictions',
          values: [
            'Yes - avoid hard, sticky foods',
            'Yes - avoid hard, sticky foods',
            'No - removable for eating'
          ]
        },
        {
          feature: 'Cleaning',
          values: [
            'More challenging, special tools needed',
            'More challenging, special tools needed',
            'Easy - remove aligners to clean'
          ]
        }
      ]
    },
    additionalInfo: [
      {
        title: 'Treatment Process',
        icon: React.createElement(MdMedicalServices, { className: "w-6 h-6" }),
        items: [
          'Initial consultation and assessment',
          'Digital scanning and treatment planning',
          'Regular adjustments and monitoring',
          'Retention phase guidance'
        ]
      },
      {
        title: 'Types of Treatment',
        icon: React.createElement(FaTeeth, { className: "w-6 h-6" }),
        items: [
          'Traditional metal braces',
          'Ceramic (tooth-colored) braces',
          'Clear aligners (removable)',
          'Lingual braces (hidden behind teeth)'
        ]
      },
      {
        title: 'Care Instructions',
        icon: React.createElement(TbDental, { className: "w-6 h-6" }),
        items: [
          'Proper brushing and flossing techniques',
          'Foods to avoid during treatment',
          'Emergency care guidelines',
          'Regular follow-up visits'
        ]
      }
    ]
  },
  {
    icon: React.createElement(TbCrown, { className: "w-8 h-8" }),
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
        title: 'PFM vs Zirconia Crowns',
        image: '/service-examples/crowns-veneers/info/pfm-vs-zerconia-crowns.jpg',
        description: 'Compare the benefits of traditional Porcelain-Fused-to-Metal (PFM) crowns with modern Zirconia crowns. While PFM crowns have been reliable for decades, Zirconia offers superior aesthetics and durability without any metal base.',
        placeholder: 'Comparison between PFM and Zirconia crowns'
      },
      {
        title: 'Porcelain Veneers',
        image: '/service-examples/crowns-veneers/info/Porcelain Veneers.jpg',
        description: 'Porcelain veneers are ultra-thin shells of ceramic material bonded to the front of teeth. They\'re an excellent solution for improving your smile and can address multiple cosmetic concerns including discolored, worn down, chipped, misaligned, or irregularly shaped teeth.',
        placeholder: 'Porcelain veneers explanation'
      }
    ],
    comparison: {
      headers: ['Features', 'Zirconia Crowns', 'PFM Crowns', 'Porcelain Veneers'],
      rows: [
        {
          feature: 'Appearance',
          values: [
            'Most natural-looking, translucent',
            'Natural but may show metal edge',
            'Extremely natural, highly aesthetic'
          ]
        },
        {
          feature: 'Durability',
          values: [
            'Extremely strong, resistant to chips',
            'Very durable with metal support',
            'Durable but more delicate than crowns'
          ]
        },
        {
          feature: 'Tooth Reduction',
          values: [
            'Minimal tooth reduction needed',
            'Moderate tooth reduction',
            'Minimal tooth reduction'
          ]
        },
        {
          feature: 'Cost Range',
          values: [
            '$800 - $2,000',
            '$500 - $1,500',
            '$800 - $2,500 per tooth'
          ]
        },
        {
          feature: 'Longevity',
          values: [
            '15+ years with proper care',
            '10-15 years average',
            '10-15 years with good care'
          ]
        }
      ]
    },
    additionalInfo: [
      {
        title: 'Crown Procedure',
        icon: React.createElement(MdMedicalServices, { className: "w-6 h-6" }),
        items: [
          'Initial consultation and planning',
          'Tooth preparation and impression',
          'Temporary crown placement',
          'Final crown fitting and adjustment'
        ]
      },
      {
        title: 'Veneer Process',
        icon: React.createElement(FaTooth, { className: "w-6 h-6" }),
        items: [
          'Smile design consultation',
          'Minimal tooth preparation',
          'Custom fabrication',
          'Bonding and final adjustments'
        ]
      },
      {
        title: 'Care Instructions',
        icon: React.createElement(TbDental, { className: "w-6 h-6" }),
        items: [
          'Avoid very hard foods',
          'Regular brushing and flossing',
          'Regular dental check-ups',
          'Night guard if recommended'
        ]
      }
    ]
  },
  {
    icon: React.createElement(MdMedicalServices, { className: "w-8 h-8" }),
    title: 'Dental Consultation',
    description: 'Comprehensive examination and personalized treatment planning for optimal oral health and a confident smile.',
    features: [
      'Digital X-rays & 3D Imaging',
      'Comprehensive Oral Exam',
      'Treatment Planning',
      'Preventive Guidance'
    ],
    info: [
      {
        title: 'Initial Consultation Overview',
        image: '/service-examples/consultation/info/dental-consulation-hero-image.webp',
        description: 'Your first visit begins with a thorough discussion of your dental history, concerns, and goals. We take time to understand your unique needs and explain our comprehensive approach to dental care. This helps us create a personalized treatment plan that aligns with your objectives.',
        placeholder: 'Initial consultation discussion'
      },
      {
        title: 'Comprehensive Examination',
        image: '/service-examples/consultation/info/consulation-second-image.jpg',
        description: 'During your consultation, we perform a detailed examination using state-of-the-art technology to ensure comprehensive care for your dental health.\n\nOur examination includes:\n\n• High-resolution digital X-rays and imaging\n• Complete examination of teeth, gums, and jaw alignment\n• Assessment of existing dental work\n• Discussion of treatment options\n\nOur goal is to provide you with a clear understanding of your oral health and the best path forward for your dental care.',
        placeholder: 'Detailed dental examination'
      }
    ],
    additionalInfo: [
      {
        title: 'Initial Assessment',
        icon: 'clipboard-list',
        items: [
          'Complete review of medical and dental history',
          'Discussion of your concerns and goals',
          'Understanding your lifestyle and habits'
        ]
      },
      {
        title: 'Comprehensive Examination',
        icon: 'search',
        items: [
          'Digital X-rays and 3D imaging when needed',
          'Thorough examination of teeth and gums',
          'TMJ and bite evaluation',
          'Assessment of existing dental work'
        ]
      },
      {
        title: 'Treatment Planning',
        icon: 'chart-bar',
        items: [
          'Detailed explanation of findings',
          'Discussion of treatment options',
          'Visual aids and digital imaging review',
          'Personalized treatment recommendations'
        ]
      }
    ]
  },
  {
    icon: React.createElement(MdCleaningServices, { className: "w-8 h-8" }),
    title: 'Scaling and Polishing',
    description: 'Professional cleaning for optimal oral hygiene.',
    features: ['Deep cleaning', 'Stain removal', 'Gum health care', 'Fresh breath'],
    info: []
  },
  {
    icon: React.createElement(FaTooth, { className: "w-8 h-8" }),
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend perfectly.',
    features: ['Invisible repairs', 'Durable material', 'Immediate results', 'Preserves tooth'],
    info: []
  },
  {
    icon: React.createElement(RiSurgicalMaskFill, { className: "w-8 h-8" }),
    title: 'Dental Surgery',
    description: 'Expert surgical procedures with focus on comfort.',
    features: ['Wisdom tooth removal', 'Dental implants', 'Bone grafting', 'Surgical extractions'],
    info: []
  },
  {
    icon: React.createElement(TbDental, { className: "w-8 h-8" }),
    title: 'Dentures',
    description: 'Custom-made replacements for a natural-looking smile.',
    features: ['Full dentures', 'Partial dentures', 'Custom fitting', 'Natural look'],
    info: []
  },
  {
    icon: React.createElement(IoColorPaletteOutline, { className: "w-8 h-8" }),
    title: 'Tooth Whitening',
    description: 'Professional whitening for a brighter smile.',
    features: ['Safe procedure', 'Quick results', 'Long-lasting', 'Custom trays'],
    info: []
  },
  {
    icon: React.createElement(RiMentalHealthLine, { className: "w-8 h-8" }),
    title: 'Preventive Care',
    description: 'Regular maintenance for long-term oral health.',
    features: ['Regular check-ups', 'Fluoride treatment', 'Oral hygiene tips', 'Early detection'],
    info: []
  },
  {
    icon: React.createElement(TbDental, { className: "w-8 h-8" }),
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic therapy to save damaged teeth and relieve pain.',
    features: [
      'Pain relief',
      'Tooth preservation',
      'Modern techniques',
      'High success rate'
    ],
    info: [
      {
        title: 'What is Root Canal Treatment?',
        image: '/service-examples/root-canal/info/what-is-root-canal-treatment.jpg',
        description: 'Root canal treatment is a dental procedure that treats infection at the center of a tooth. The treatment is needed when the blood or nerve supply of the tooth (known as the pulp) becomes infected due to decay, leaky fillings, or damage to teeth.',
        placeholder: 'Root canal treatment explanation'
      },
      {
        title: 'Treatment Procedure',
        image: '/service-examples/root-canal/info/root-canal-treatment-procedure-step-by-step.jpg',
        description: 'Our root canal procedure uses advanced techniques and technology to ensure your comfort and the best possible outcome. The process involves removing infected pulp, cleaning the canal, and sealing it to prevent future infection.',
        placeholder: 'Root canal procedure steps'
      }
    ],
    comparison: {
      headers: ['Aspect', 'Traditional Method', 'Modern Technique'],
      rows: [
        {
          feature: 'Treatment Time',
          values: [
            'Multiple long visits',
            'Usually completed in 1-2 visits'
          ]
        },
        {
          feature: 'Pain Level',
          values: [
            'May be uncomfortable',
            'Minimal discomfort with advanced anesthesia'
          ]
        },
        {
          feature: 'Success Rate',
          values: [
            '85-90%',
            '95-98% with modern techniques'
          ]
        },
        {
          feature: 'Recovery Time',
          values: [
            'Several days of discomfort',
            'Minimal recovery time needed'
          ]
        }
      ]
    },
    additionalInfo: [
      {
        title: 'When is it Needed?',
        icon: React.createElement(MdMedicalServices, { className: "w-6 h-6" }),
        items: [
          'Severe tooth decay',
          'Cracked or damaged tooth',
          'Deep cavity reaching the pulp',
          'Repeated dental procedures on tooth'
        ]
      },
      {
        title: 'Benefits',
        icon: React.createElement(FaTooth, { className: "w-6 h-6" }),
        items: [
          'Saves natural tooth',
          'Eliminates pain and infection',
          'Restores normal bite and function',
          'Long-lasting results'
        ]
      },
      {
        title: 'Aftercare',
        icon: React.createElement(TbDental, { className: "w-6 h-6" }),
        items: [
          'Temporary crown protection',
          'Avoid hard foods initially',
          'Regular dental check-ups',
          'Good oral hygiene maintenance'
        ]
      }
    ]
  }
];
