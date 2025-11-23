import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Skill } from '../types/portfolio';
import { cn } from '@/lib/utils';

interface SkillsGridProps {
  skills: Array<Skill & { icon: JSX.Element }>;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
      {skills.map((skill, idx) => (
        <div
          key={skill.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white dark:bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col items-center justify-center gap-4 transition-colors duration-200">
            <div className="relative z-50">
              <div className={cn("text-5xl mb-2 transition-transform duration-300 group-hover:scale-110", skill.color)}>
                {skill.icon}
              </div>
              <h4 className="text-zinc-700 dark:text-zinc-100 font-bold tracking-wide text-center">
                {skill.name}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
