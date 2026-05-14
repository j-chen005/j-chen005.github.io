import { motion } from 'framer-motion';

export default function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        type: 'spring',
        stiffness: 130,
        damping: 13,
        mass: 0.8,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
