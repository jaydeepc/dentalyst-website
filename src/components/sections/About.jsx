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
          className="grid grid-cols-2 gap-4"
        >
          <div className="space-y-4">
            <img
              src="/clinic-photos/1.jpg"
              alt="Clinic Interior"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/clinic-photos/2.jpg"
              alt="Treatment Room"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              src="/clinic-photos/3.jpg"
              alt="Dental Equipment"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/doctor-photo/dranindita.png"
              alt="Dr. Anindita Chatterjee"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-display font-bold mb-6">
              Welcome to Dentalyst Dental Studio
            </h2>
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
            className="bg-neutral rounded-xl p-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/doctor-photo/dranindita.png"
                alt="Dr. Anindita Chatterjee"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-display font-semibold">Dr. Anindita Chatterjee</h3>
                <p className="text-gray-600">
                  Dental Surgeon, BDS, C.C Endodontics, PGDM (Healthcare)
                </p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &ldquo;My mission is to provide exceptional dental care in a comfortable and welcoming environment, ensuring each patient receives personalized attention and the highest quality treatment.&rdquo;
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <h3 className="text-xl font-display font-semibold mb-4">
              Why Choose Dentalyst?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <HiCheckCircle className="w-5 h-5 text-secondary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/#book" className="btn-primary text-center">
              Book Appointment
            </a>
            <a href="/#services" className="btn-secondary text-center">
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
