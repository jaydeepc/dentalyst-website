import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Section = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`section ${className}`}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

export default Section;
