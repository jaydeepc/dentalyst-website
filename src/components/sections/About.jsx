import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import Section from '../common/Section';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const features = [
    'State-of-the-art dental facilities',
    'Personalized treatment plans',
    'Comfortable and relaxing environment',
    'Experienced dental professionals',
    'Latest dental technologies',
    'Comprehensive dental care'
  ];

  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="/clinic-photos/1.jpg"
                  alt="Clinic Interior"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="/clinic-photos/2.jpg"
                  alt="Treatment Room"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="/clinic-photos/3.jpg"
                  alt="Dental Equipment"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="/doctor-photo/dranindita.png"
                  alt="Dr. Anindita Chatterjee"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-light/20 to-transparent rounded-full blur-xl" />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-bl from-secondary-light/20 to-transparent rounded-full blur-xl" />
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Welcome to Dentalyst Dental Studio
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6" />
            <p className="text-gray-600 mb-4">
              At Dentalyst, we believe in personalized care, and offer a wide range of services to meet your unique needs. Our experienced team is here to help you achieve the smile of your dreams, and we can&apos;t wait to make it a reality.
            </p>
            <p className="text-gray-600 mb-8">
              With over 12 years of experience, I&apos;m passionate about helping you achieve optimal oral health and a beautiful, confident smile.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.img
                src="/doctor-photo/dranindita.png"
                alt="Dr. Anindita Chatterjee"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h3 className="font-display font-semibold text-xl text-primary">Dr. Anindita Chatterjee</h3>
                <p className="text-gray-600">
                  Dental Surgeon, BDS, C.C Endodontics, PGDM (Healthcare)
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic border-l-4 border-primary/20 pl-4">
              &ldquo;My mission is to provide exceptional dental care in a comfortable and welcoming environment, ensuring each patient receives personalized attention and the highest quality treatment.&rdquo;
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-2xl font-display font-semibold mb-6 text-gray-800">
              Why Choose Dentalyst?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <HiCheckCircle className="w-6 h-6 text-secondary group-hover:text-primary transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/#book"
              className="btn-primary text-center bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </a>
            <a
              href="/#services"
              className="btn-secondary text-center bg-gradient-to-r from-secondary to-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
