import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types/portfolio';

interface SkillsGridProps {
  skills: Array<Skill & { icon: JSX.Element }>;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.div 
            className="mb-4 relative w-16 h-16 flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`text-6xl ${skill.color}`}>
              {skill.icon}
            </div>
            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <motion.span 
            className="text-gray-700 font-medium text-center relative"
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
