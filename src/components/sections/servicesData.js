import { FaTooth } from 'react-icons/fa';
import { MdCleaningServices, MdMedicalServices } from 'react-icons/md';
import { RiSurgicalMaskFill, RiMentalHealthLine } from 'react-icons/ri';
import { TbDental, TbCrown } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';
import React from 'react';

export const services = [
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
  }
];
