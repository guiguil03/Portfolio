import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { WavyBackground } from '@/components/ui/wavy-background';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

interface TechBadgeProps {
  tech: string;
  index: number;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => (
  <span
    key={tech}
    className="px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-purple-500/20 text-white relative z-20 animate-fade-in-up transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-white/20"
    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
  >
    {tech}
  </span>
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

        <p
          className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto text-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Passionné par la création d'applications web modernes et performantes
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {technologies.map((tech, index) => (
            <TechBadge key={tech} tech={tech} index={index} />
          ))}
        </div>

        <div
          className="flex justify-center space-x-6 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="https://github.com/guiguil03"
            className="text-3xl text-purple-100 hover:text-white transition-[color,transform] duration-200 hover:scale-110 hover:rotate-[5deg] active:scale-95 relative group"
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaGithub className="relative z-10" />
          </a>
          <a
            href="mailto:guillaumel1103@gmail.com"
            className="text-3xl text-purple-100 hover:text-white transition-[color,transform] duration-200 hover:scale-110 hover:rotate-[5deg] active:scale-95 relative group"
          >
            <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md group-hover:bg-purple-500/40 transition-all duration-300"></span>
            <FaEnvelope className="relative z-10" />
          </a>
        </div>
      </WavyBackground>
    </div>
  );
};

export default HeroSection;
