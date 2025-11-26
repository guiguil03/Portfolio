import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types/portfolio';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const isValidUrl = (url: string) => {
    return url && url.trim() !== '' && url !== 'https://demo.com';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-purple-400/80 dark:hover:border-purple-500/70 transition-all duration-300 h-full flex flex-col shadow-[0_18px_45px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_60px_rgba(88,28,135,0.35)] backdrop-blur">
            <div className="pointer-events-none absolute inset-px rounded-[22px] bg-gradient-to-br from-purple-500/15 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
                  Projet
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                </span>
                {project.tech[0] && (
                  <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                    {project.tech[0]}
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors tracking-tight">
                {project.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-1 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50/70 dark:bg-purple-900/40 text-purple-700 dark:text-purple-200 border border-purple-200/80 dark:border-purple-700/70 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                {isValidUrl(project.github) && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100/80 dark:bg-neutral-800/80 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-100 font-medium transition-colors border border-neutral-200/80 dark:border-neutral-700/80"
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                )}
                {isValidUrl(project.demo) && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white font-semibold transition-all shadow-lg shadow-purple-500/30"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
