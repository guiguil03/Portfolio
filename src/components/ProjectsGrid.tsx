import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiPostgresql,
  SiJavascript,
  SiDocker,
  SiMysql,
  SiPython,
  SiPhp,
  SiGit,
  SiLinux,
  SiAngular,
  SiExpo,
  SiSupabase,
  SiDotnet,
} from 'react-icons/si';
import { FaAws, FaGithub, FaArrowRight, FaMobileAlt, FaGlobe, FaApple } from 'react-icons/fa';
import { Project } from '../types/portfolio';

interface ProjectsGridProps {
  projects: Project[];
}

const isValidUrl = (url?: string) => {
  return !!url && url.trim() !== '' && url !== 'https://demo.com';
};

const normalize = (tech: string) => tech.toLowerCase().replace(/[\s.]/g, '');

const TECH_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  react: SiReact,
  reactnative: SiReact,
  nodejs: SiNodedotjs,
  mongodb: SiMongodb,
  stripe: SiStripe,
  typescript: SiTypescript,
  firebase: SiFirebase,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  nextjs: SiNextdotjs,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  javascript: SiJavascript,
  docker: SiDocker,
  mysql: SiMysql,
  python: SiPython,
  php: SiPhp,
  git: SiGit,
  linux: SiLinux,
  aws: FaAws,
  angular: SiAngular,
  expo: SiExpo,
  supabase: SiSupabase,
  'c#': SiDotnet,
};

const FRONTEND_KEYS = ['react', 'reactnative', 'nextjs', 'typescript', 'javascript', 'tailwind', 'tailwindcss', 'angular', 'expo'];
const BACKEND_KEYS = ['nodejs', 'graphql', 'postgresql', 'mongodb', 'mysql', 'php', 'python', 'firebase', 'stripe', 'supabase', 'c#'];
const TOOLS_KEYS = ['docker', 'git', 'linux', 'aws', 'azure'];

const groupTech = (tech: string[]) => {
  const groups = { frontend: [] as string[], backend: [] as string[], tools: [] as string[], autres: [] as string[] };
  tech.forEach((t) => {
    const key = normalize(t);
    if (FRONTEND_KEYS.includes(key)) groups.frontend.push(t);
    else if (BACKEND_KEYS.includes(key)) groups.backend.push(t);
    else if (TOOLS_KEYS.includes(key)) groups.tools.push(t);
    else groups.autres.push(t);
  });
  return groups;
};

const hostnameOf = (url?: string) => {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
};

const TechPill: React.FC<{ tech: string }> = ({ tech }) => {
  const Icon = TECH_ICONS[normalize(tech)];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-200">
      {Icon && <Icon className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />}
      {tech}
    </span>
  );
};

const TechGroup: React.FC<{ label: string; items: string[] }> = ({ label, items }) => {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <TechPill key={tech} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-24 lg:gap-32">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1;
        const { frontend, backend, tools, autres } = groupTech(project.tech);
        const isMobile = project.type
          ? project.type === 'mobile'
          : normalize(project.tech.join('')).includes('reactnative');
        const host = hostnameOf(project.demo);

        return (
          <div key={project.title} className="relative">
            {index > 0 && (
              <div className="absolute -top-12 lg:-top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/10 to-transparent" />
            )}

            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Aperçu / mockup */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
              >
                <span className="pointer-events-none absolute -top-10 -left-4 select-none text-8xl md:text-9xl font-black text-neutral-900/[0.04] dark:text-white/[0.04] tracking-tighter">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-transparent blur-2xl opacity-70" />

                {isMobile ? (
                  /* Téléphone flottant, sans cadre : plus léger qu'un mockup "boîte" */
                  <div className="group relative flex flex-col items-center gap-4 py-4">
                    {/* Halo de couleur derrière le téléphone (pas de fond plein) */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="h-[75%] w-[70%] rounded-full bg-gradient-to-br from-purple-400/25 via-fuchsia-400/15 to-transparent blur-3xl dark:from-purple-500/20 dark:via-fuchsia-500/10" />
                    </div>

                    <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-neutral-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 px-3 py-1 text-[11px] text-neutral-500 dark:text-neutral-400 backdrop-blur">
                      <FaMobileAlt size={10} />
                      {host ?? 'application mobile'}
                    </div>

                    <div className="relative z-10 h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] aspect-[9/19.5] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                      <div className="relative h-full overflow-hidden rounded-[2.5rem] border-[8px] border-neutral-950 bg-neutral-950 shadow-[0_30px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
                        <span className="absolute left-1/2 top-0 z-10 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-neutral-950" />
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-1.5 left-1/2 z-10 h-1 w-14 -translate-x-1/2 rounded-full bg-white/60" />
                        <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                      </div>
                    </div>

                    {project.logo && (
                      <div className="relative z-10 inline-flex h-9 items-center rounded-lg border border-neutral-200/70 dark:border-white/10 bg-white/90 dark:bg-neutral-900/90 px-3 shadow-sm backdrop-blur">
                        <img src={project.logo} alt={`Logo ${project.title}`} loading="lazy" decoding="async" className="h-5 md:h-6 w-auto object-contain" />
                      </div>
                    )}
                  </div>
                ) : (
                  /* Mockup fenêtre pour un site web */
                  <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-3 border-b border-neutral-200/70 dark:border-white/10 bg-neutral-50/90 dark:bg-neutral-800/80 px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/80 dark:bg-white/5 px-3 py-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                        <FaGlobe size={10} />
                        {host ?? 'aperçu du projet'}
                      </div>
                    </div>

                    <div
                      className={`relative overflow-hidden h-72 md:h-96 ${
                        project.fit === 'contain'
                          ? 'flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 p-10 md:p-14'
                          : ''
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                          project.fit === 'contain' ? 'max-h-full max-w-full object-contain' : 'w-full h-full object-cover'
                        }`}
                      />
                    </div>

                    {project.logo && (
                      <div className="absolute bottom-4 left-4 inline-flex h-9 max-w-[65%] items-center rounded-lg bg-white/95 dark:bg-neutral-900/95 px-3 shadow-lg ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
                        <img src={project.logo} alt={`Logo ${project.title}`} loading="lazy" decoding="async" className="h-5 md:h-6 w-auto object-contain" />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Détails */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-500 dark:text-purple-400">
                  Projet {String(index + 1).padStart(2, '0')} · {isMobile ? 'Application mobile' : 'Application web'}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>

                <div className="mt-7 space-y-5">
                  <TechGroup label="Frontend" items={frontend} />
                  <TechGroup label="Backend & données" items={backend} />
                  <TechGroup label="Outils" items={tools} />
                  <TechGroup label="Technologies" items={autres} />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {isValidUrl(project.github) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-white/15 px-5 py-2.5 text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:border-neutral-400 dark:hover:border-white/30 transition-colors"
                    >
                      <FaGithub size={16} />
                      Code source
                    </a>
                  )}
                  {isValidUrl(project.demo) && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all"
                    >
                      Voir le site
                      <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}
                  {isValidUrl(project.appStore) && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-white/15 px-5 py-2.5 text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:border-neutral-400 dark:hover:border-white/30 transition-colors"
                    >
                      <FaApple size={16} />
                      App Store
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;
