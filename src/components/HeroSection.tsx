import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => (
  <motion.span
    key={tech}
    className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-purple-500/20"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 + index * 0.1 }}
  >
    {tech}
  </motion.span>
);

const HeroSection: React.FC = () => {
  const technologies = ['React', 'TypeScript', 'Node.js', 'MongoDB'];

  return (
    <section className="h-screen flex items-center justify-center bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-purple-900/50 to-secondary/50 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-4 backdrop-blur-sm py-12 rounded-xl bg-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Développeur Full-Stack
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Passionné par la création d'applications web modernes et performantes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {technologies.map((tech, index) => (
            <TechBadge key={tech} tech={tech} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com"
            className="text-3xl text-purple-100 hover:text-white transition-colors relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaGithub className="relative z-10" />
          </motion.a>
          <motion.a
            href="mailto:email@example.com"
            className="text-3xl text-purple-100 hover:text-white transition-colors relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaEnvelope className="relative z-10" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
