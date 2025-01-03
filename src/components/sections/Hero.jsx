import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const features = [
    {
      title: "Holistic",
      description: "Dental care for your complete well-being",
      delay: 0.3,
    },
    {
      title: "Innovative",
      description: "Technology for advanced treatments",
      delay: 0.5,
    },
    {
      title: "Personalized",
      description: "Care tailored to your needs",
      delay: 0.7,
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 sm:pt-28 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/clinic-photos/working-on-patient.jpg"
          alt="Dentalyst Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-gradient/95 via-primary-dark/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-white px-4 sm:px-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-5xl md:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight"
            >
              Your dental experience{" "}
              <span className="text-accent">reimagined</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8">
              Our comprehensive approach to dental care takes into account your overall health and well-being, not just your teeth and gums.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href="/#contact"
                className="btn-secondary text-center transform hover:scale-105 hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-secondary to-secondary-dark w-full sm:w-auto text-base sm:text-base"
              >
                Book Appointment
              </a>
              <a
                href="/#services"
                className="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-center transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-base sm:text-base"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-6 px-4 sm:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: feature.delay, duration: 0.8 }}
                className={`relative bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/20 transform transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? 'lg:translate-x-8' : 'lg:-translate-x-8'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="relative p-3 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">{feature.title}</h3>
                  <p className="text-base sm:text-base text-white/90">{feature.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-secondary to-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <HiChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
