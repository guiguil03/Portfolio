import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Skill } from '../types/portfolio';
import { cn } from '@/lib/utils';

interface SkillsGridProps {
  skills: Array<Skill & { icon: JSX.Element }>;
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

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

  const groupedSkills = skills.reduce<Record<CategoryKey, SkillsGridProps['skills']>>(
    (acc, skill) => {
      const category = getCategory(skill.name);
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill);
      return acc;
    },
    { frontend: [], backend: [], devops: [], tools: [], other: [] }
  );

  const categories: Array<{
    key: CategoryKey;
    title: string;
    description?: string;
  }> = [
    {
      key: 'frontend',
      title: 'Frontend',
      description: 'Interfaces modernes et expériences utilisateurs réactives.',
    },
    {
      key: 'backend',
      title: 'Backend & Bases de données',
      description: 'APIs, logique métier et gestion des données.',
    },
    {
      key: 'devops',
      title: 'DevOps & Cloud',
      description: 'Infrastructure, conteneurs et déploiement.',
    },
    {
      key: 'tools',
      title: 'Outils & Langages complémentaires',
      description: 'Outils du quotidien, scripts et automatisation.',
    },
  ];

  return (
    <div className="space-y-10 py-10">
      {categories.map((category) => {
        const categorySkills = groupedSkills[category.key];
        if (!categorySkills || categorySkills.length === 0) return null;

        return (
          <div key={category.key} className="space-y-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {category.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorySkills.map((skill) => {
                const cardKey = `${category.key}-${skill.name}`;
                return (
                  <div
                    key={cardKey}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredKey(cardKey)}
                    onMouseLeave={() => setHoveredKey(null)}
                  >
                    <AnimatePresence>
                      {hoveredKey === cardKey && (
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
                        <div
                          className={cn(
                            "text-5xl mb-2 transition-transform duration-300 group-hover:scale-110",
                            skill.color
                          )}
                        >
                          {skill.icon}
                        </div>
                        <h4 className="text-zinc-700 dark:text-zinc-100 font-bold tracking-wide text-center">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
