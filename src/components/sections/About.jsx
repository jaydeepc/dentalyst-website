import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from '../common/Section';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/clinic-photos/1.jpg', alt: 'Dentalyst Clinic View' },
    { src: '/clinic-photos/2.jpg', alt: 'Dental Treatment Room' },
    { src: '/clinic-photos/4.jpeg', alt: 'Modern Dental Equipment' },
    { src: '/clinic-photos/5.jpeg', alt: 'Dental Care Facility' },
  ];

  return (
    <Section id="about" className="relative bg-gradient-to-br from-white via-neutral to-neutral-dark/5">
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
              About Us
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">Welcome to Dentalyst Dental Studio!</h3>
              <p className="text-gray-700 mb-4">
                We&apos;re dedicated to providing high-quality dental care in a warm, welcoming environment. With over 12 years of experience, we&apos;re passionate about helping you achieve optimal oral health and a beautiful, confident smile.
              </p>
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src="/doctor-photo/dranindita.png"
                  alt="Dr. Anindita Chatterjee"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div>
                  <h4 className="text-xl font-semibold text-primary">Dr. Anindita Chatterjee</h4>
                  <p className="text-gray-600">Dental Surgeon, BDS, C.C Endodontics, PGDM (Healthcare)</p>
                </div>
              </div>
              <p className="text-gray-700">
                At Dentalyst, we believe in personalized care, and offer a wide range of services to meet your unique needs. Our experienced team is here to help you achieve the smile of your dreams, and we can&apos;t wait to make it a reality.
              </p>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Modal */}
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="relative max-w-4xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
