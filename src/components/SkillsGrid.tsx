import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCloud, FaCode, FaLayerGroup, FaServer, FaTools } from 'react-icons/fa';
import { Skill } from '../types/portfolio';
import { cn } from '@/lib/utils';

interface SkillsGridProps {
  skills: Array<Skill & { icon: JSX.Element }>;
}

type CategoryKey = 'frontend' | 'backend' | 'devops' | 'tools' | 'other';

const getCategory = (name: string): CategoryKey => {
  switch (name) {
    case 'TypeScript':
    case 'JavaScript':
    case 'React':
    case 'Next.js':
    case 'React Native':
    case 'Tailwind CSS':
      return 'frontend';
    case 'Node.js':
    case 'PHP':
    case 'PostgreSQL':
    case 'MySQL':
    case 'MongoDB':
      return 'backend';
    case 'Docker':
    case 'Linux':
    case 'AWS':
      return 'devops';
    case 'Git':
    case 'Python':
      return 'tools';
    default:
      return 'other';
  }
};

const CATEGORY_META: Record<CategoryKey, { title: string; icon: React.ComponentType<{ size?: number }> }> = {
  frontend: { title: 'Frontend', icon: FaCode },
  backend: { title: 'Backend & données', icon: FaServer },
  devops: { title: 'DevOps & Cloud', icon: FaCloud },
  tools: { title: 'Outils', icon: FaTools },
  other: { title: 'Autres', icon: FaLayerGroup },
};

const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const [active, setActive] = useState<CategoryKey | 'all'>('all');

  const counts = useMemo(() => {
    const acc: Record<CategoryKey, number> = { frontend: 0, backend: 0, devops: 0, tools: 0, other: 0 };
    skills.forEach((skill) => {
      acc[getCategory(skill.name)] += 1;
    });
    return acc;
  }, [skills]);

  const filters: Array<{ key: CategoryKey | 'all'; title: string; icon: React.ComponentType<{ size?: number }>; count: number }> = [
    { key: 'all', title: 'Toutes', icon: FaLayerGroup, count: skills.length },
    ...(Object.keys(CATEGORY_META) as CategoryKey[])
      .filter((key) => counts[key] > 0)
      .map((key) => ({ key, title: CATEGORY_META[key].title, icon: CATEGORY_META[key].icon, count: counts[key] })),
  ];

  const filtered = active === 'all' ? skills : skills.filter((skill) => getCategory(skill.name) === active);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-12">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = active === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
                isActive
                  ? 'border-transparent bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30'
                  : 'border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 hover:border-purple-300 dark:hover:border-purple-500/50 hover:text-neutral-900 dark:hover:text-white'
              )}
            >
              <Icon size={13} />
              {filter.title}
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[11px] leading-none',
                  isActive ? 'bg-white/25' : 'bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'
                )}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grille de compétences */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onMouseMove={handleSpotlight}
              className="group relative"
              style={{ ['--x' as any]: '50%', ['--y' as any]: '50%' }}
            >
              <div className="relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5 h-32 transition-colors duration-300 hover:border-purple-300/80 dark:hover:border-purple-500/50">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(180px circle at var(--x) var(--y), rgba(168,85,247,0.16), transparent 70%)',
                  }}
                />
                <div className={cn('relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110', skill.color)}>
                  {skill.icon}
                </div>
                <h4 className="relative z-10 text-center text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  {skill.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SkillsGrid;
