import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { WavyBackground } from '@/components/ui/wavy-background';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => (
  <motion.span
    key={tech}
    className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-purple-500/20 text-white relative z-20"
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

  const words = [
    {
      text: "Développeur",
      className: "text-white",
    },
    {
      text: "Full-Stack",
      className: "text-purple-500 dark:text-purple-500",
    }

  ];

  return (
    <div className="relative overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40 flex flex-col items-center justify-center h-full">
        <div className="mb-6">
          <h1 className="contents">
            <TypewriterEffectSmooth words={words} />
          </h1>
        </div>

        <motion.p
          className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto text-center"
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
            href="https://github.com/guiguil03"
            className="text-3xl text-purple-100 hover:text-white transition-colors relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaGithub className="relative z-10" />
          </motion.a>
          <motion.a
            href="mailto:guillaumel1103@gmail.com"
            className="text-3xl text-purple-100 hover:text-white transition-colors relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaEnvelope className="relative z-10" />
          </motion.a>
        </motion.div>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
