import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0.1, duration = 0.6, y = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
