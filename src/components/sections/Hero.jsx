import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/clinic-photos/working-on-patient.jpg"
          alt="Dentalyst Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
      </div>

      {/* Content */}
      <motion.div
        className="container relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Your dental experience{" "}
            <span className="text-secondary-light">reimagined</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-gray-100">
              Our comprehensive approach to dental care takes into account your overall health and well-being, not just your teeth and gums.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary-light rounded-full" />
                <span>Holistic dental care for your complete well-being</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary-light rounded-full" />
                <span>Innovative technology for advanced treatments</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-secondary-light rounded-full" />
                <span>Personalized care tailored to your needs</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/#book"
              className="btn-secondary text-center"
            >
              Book Appointment
            </a>
            <a
              href="/#services"
              className="btn bg-white text-primary hover:bg-gray-100 text-center"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute top-1/2 right-8 transform -translate-y-1/2 bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-sm"
        >
          <h3 className="text-2xl font-display font-semibold mb-4">
            Welcome to Dentalyst!
          </h3>
          <p className="text-gray-600 mb-6">
            We understand the importance of dental health and are here to provide you with the best dental care. With our state-of-the-art facilities and experienced dentists, we guarantee you a comfortable and memorable experience.
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="/doctor-photo/dranindita.png"
              alt="Dr. Anindita Chatterjee"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold">Dr. Anindita Chatterjee</h4>
              <p className="text-sm text-gray-500">
                Dental Surgeon, BDS, C.C Endodontics
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 w-96 h-96 bg-white rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
