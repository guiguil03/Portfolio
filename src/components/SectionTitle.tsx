import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative mb-16 text-center `}
    >
      <h2 className="text-4xl font-bold relative inline-block">
        {children}
        <motion.div
          className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-secondary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
      </h2>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm" />
    </motion.div>
  );
};

export default SectionTitle;
