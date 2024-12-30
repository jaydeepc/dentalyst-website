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
    description: 'Professional cleaning for optimal oral hygiene and gum health maintenance.',
    features: [
      'Deep cleaning & tartar removal',
      'Professional stain removal',
      'Gum disease prevention',
      'Fresh breath maintenance'
    ],
    info: [
      {
        title: 'Deep Cleaning Results',
        image: '/service-examples/cleaning/info/deep-cleaning-before-after-image.jpg',
        description: 'Professional scaling and polishing removes stubborn tartar and plaque that regular brushing cannot eliminate. The procedure helps prevent gum disease and tooth decay while significantly improving the appearance of your teeth.',
        placeholder: 'Before and after deep cleaning'
      },
      {
        title: 'Fresh Breath Benefits',
        image: '/service-examples/cleaning/info/fresh-breath-a-result-of-scaling-cleaning-image.jpg',
        description: 'One of the immediate benefits of scaling and polishing is fresher breath. By removing bacteria, plaque, and tartar, we eliminate the primary causes of bad breath, giving you renewed confidence in your daily interactions.',
        placeholder: 'Fresh breath after cleaning'
      },
      {
        title: 'Gum Health Importance',
        image: '/service-examples/cleaning/info/gum-health-image.jpeg',
        description: 'Healthy gums are crucial for overall oral health. Regular scaling and polishing help prevent gingivitis and periodontitis by removing harmful bacteria and calculus that can cause gum inflammation and recession.',
        placeholder: 'Healthy gums illustration'
      },
      {
        title: 'Professional Cleaning Process',
        image: '/service-examples/cleaning/info/process-of-cleaning-image.png',
        description: 'Our thorough cleaning process involves ultrasonic scaling to remove tartar, manual scaling for precision cleaning, and polishing to leave your teeth smooth and shiny. The procedure is comfortable and typically takes 30-45 minutes.',
        placeholder: 'Dental cleaning process'
      }
    ],
    comparison: {
      headers: ['Features', 'Regular Brushing', 'Professional Cleaning'],
      rows: [
        {
          feature: 'Plaque Removal',
          values: [
            'Removes surface plaque only',
            'Removes deep-seated plaque and tartar'
          ]
        },
        {
          feature: 'Stain Removal',
          values: [
            'Limited stain removal',
            'Effective removal of most external stains'
          ]
        },
        {
          feature: 'Gum Health',
          values: [
            'Basic gum care',
            'Deep cleaning below gumline'
          ]
        },
        {
          feature: 'Frequency',
          values: [
            'Twice daily',
            'Every 6 months recommended'
          ]
        },
        {
          feature: 'Equipment Used',
          values: [
            'Toothbrush and floss',
            'Professional scaling and polishing tools'
          ]
        }
      ]
    },
    additionalInfo: [
      {
        title: 'Treatment Benefits',
        icon: React.createElement(MdMedicalServices, { className: "w-6 h-6" }),
        items: [
          'Prevention of gum disease',
          'Removal of stubborn stains',
          'Fresh breath maintenance',
          'Early detection of dental issues'
        ]
      },
      {
        title: 'Procedure Steps',
        icon: React.createElement(FaTooth, { className: "w-6 h-6" }),
        items: [
          'Ultrasonic scaling for tartar removal',
          'Manual scaling for precision',
          'Polishing for smooth finish',
          'Fluoride application if needed'
        ]
      },
      {
        title: 'Aftercare Tips',
        icon: React.createElement(TbDental, { className: "w-6 h-6" }),
        items: [
          'Maintain regular brushing routine',
          'Daily flossing recommended',
          'Use recommended oral care products',
          'Schedule regular follow-ups'
        ]
      }
    ]
  },
  {
    icon: React.createElement(FaTooth, { className: "w-8 h-8" }),
    title: 'Tooth Color Fillings',
    description: 'Natural-looking restorations that blend perfectly with your teeth to restore function and aesthetics.',
    features: [
      'Invisible repairs',
      'Durable composite material',
      'Single visit treatment',
      'Preserves tooth structure'
    ],
    info: [
      {
        title: 'Understanding Tooth Decay',
        image: '/service-examples/fillings/info/stages-of-tooth-decay.jpg',
        description: 'Tooth decay progresses through several stages, from initial enamel damage to deep cavity formation. Early detection and treatment with tooth-colored fillings can prevent further damage and preserve your natural tooth structure.',
        placeholder: 'Stages of tooth decay progression'
      },
      {
        title: 'Types of Dental Fillings',
        image: '/service-examples/fillings/info/four-types-of-dental-filling.jpg',
        description: 'Modern dentistry offers various filling materials, each with unique properties. We specialize in composite resin fillings that perfectly match your natural tooth color while providing excellent durability and protection.',
        placeholder: 'Different types of dental fillings'
      },
      {
        title: 'Aesthetic Advantage',
        image: '/service-examples/fillings/info/difference-between-tooth-color-and-non-tooth-color-filling-image.jpg',
        description: 'Tooth-colored fillings offer superior aesthetics compared to traditional amalgam fillings. They blend seamlessly with your natural teeth, making them ideal for visible areas of your smile.',
        placeholder: 'Comparison of filling types'
      },
      {
        title: 'Treatment Process',
        image: '/service-examples/fillings/info/steps-of-tooth-filling-image.jpg',
        description: 'Our filling procedure is quick and comfortable. We remove the decay, clean the cavity, and apply the composite material in layers, shaping and polishing it to match your natural tooth structure perfectly.',
        placeholder: 'Filling procedure steps'
      }
    ],
    comparison: {
      headers: ['Features', 'Tooth-Colored Fillings', 'Traditional Amalgam'],
      rows: [
        {
          feature: 'Appearance',
          values: [
            'Matches natural tooth color',
            'Silver/gray metallic appearance'
          ]
        },
        {
          feature: 'Durability',
          values: [
            '5-7 years with proper care',
            '10-15 years average'
          ]
        },
        {
          feature: 'Tooth Preservation',
          values: [
            'Requires less tooth removal',
            'Needs more tooth structure removal'
          ]
        },
        {
          feature: 'Application Time',
          values: [
            '20-30 minutes per tooth',
            '15-20 minutes per tooth'
          ]
        },
        {
          feature: 'Cost',
          values: [
            'Moderately higher',
            'More economical'
          ]
        }
      ]
    },
    additionalInfo: [
      {
        title: 'Treatment Benefits',
        icon: React.createElement(MdMedicalServices, { className: "w-6 h-6" }),
        items: [
          'Natural-looking results',
          'Immediate restoration',
          'Strengthens damaged tooth',
          'Mercury-free material'
        ]
      },
      {
        title: 'Procedure Steps',
        icon: React.createElement(FaTooth, { className: "w-6 h-6" }),
        items: [
          'Decay removal and cleaning',
          'Layer-by-layer composite application',
          'Shaping and adjusting bite',
          'Final polishing'
        ]
      },
      {
        title: 'Aftercare',
        icon: React.createElement(TbDental, { className: "w-6 h-6" }),
        items: [
          'Wait 24 hours before heavy chewing',
          'Maintain regular oral hygiene',
          'Avoid very hard foods',
          'Regular dental check-ups'
        ]
      }
    ]
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
