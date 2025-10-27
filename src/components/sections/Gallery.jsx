import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Section from '../common/Section';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('reception');

  const galleryImages = {
    reception: [
      { src: '/clinic-gallery/reception/01.jpg', alt: 'Reception Area 1' },
      { src: '/clinic-gallery/reception/02.jpg', alt: 'Reception Area 2' },
      { src: '/clinic-gallery/reception/03.jpg', alt: 'Waiting Area 1' },
      { src: '/clinic-gallery/reception/04.jpg', alt: 'Waiting Area 2' },
      { src: '/clinic-gallery/reception/05.jpg', alt: 'Reception Desk' },
      { src: '/clinic-gallery/reception/06.jpg', alt: 'Sitting Area 1' },
      { src: '/clinic-gallery/reception/07.jpg', alt: 'Sitting Area 2' },
      { src: '/clinic-gallery/reception/08.jpg', alt: 'Lobby View' },
      { src: '/clinic-gallery/reception/09.jpg', alt: 'Entrance Area' },
      { src: '/clinic-gallery/reception/10.jpg', alt: 'Reception View' },
    ],
    equipment: [
      { src: '/clinic-gallery/equipment/01.jpg', alt: 'Treatment Room 1' },
      { src: '/clinic-gallery/equipment/02.jpg', alt: 'Treatment Room 2' },
      { src: '/clinic-gallery/equipment/03.jpg', alt: 'Dental Equipment 1' },
      { src: '/clinic-gallery/equipment/04.jpg', alt: 'Dental Equipment 2' },
      { src: '/clinic-gallery/equipment/05.jpg', alt: 'Treatment Chair 1' },
      { src: '/clinic-gallery/equipment/06.jpg', alt: 'Treatment Chair 2' },
      { src: '/clinic-gallery/equipment/07.jpg', alt: 'Sterilization Area' },
      { src: '/clinic-gallery/equipment/08.jpg', alt: 'X-Ray Equipment' },
      { src: '/clinic-gallery/equipment/09.jpg', alt: 'Dental Tools' },
      { src: '/clinic-gallery/equipment/10.jpg', alt: 'Treatment Room 3' },
      { src: '/clinic-gallery/equipment/14.jpg', alt: 'Advanced Equipment 1' },
      { src: '/clinic-gallery/equipment/16.jpg', alt: 'Advanced Equipment 2' },
      { src: '/clinic-gallery/equipment/17.jpg', alt: 'Modern Facilities' },
    ],
  };

  const currentImages = galleryImages[activeTab];

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : currentImages.length - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev < currentImages.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (selectedImage !== null) {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') closeLightbox();
    }
  };

  return (
    <Section id="gallery" className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art dental facility
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            <button
              onClick={() => setActiveTab('reception')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'reception'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Reception & Waiting Area
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'equipment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Treatment Rooms & Equipment
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {currentImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Close"
              >
                <FaTimes size={32} />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Previous"
              >
                <FaChevronLeft size={40} />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-7xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={currentImages[selectedImage].src}
                  alt={currentImages[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white text-lg font-medium text-center">
                    {currentImages[selectedImage].alt}
                  </p>
                  <p className="text-gray-300 text-sm text-center mt-1">
                    {selectedImage + 1} / {currentImages.length}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Next"
              >
                <FaChevronRight size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Gallery;
