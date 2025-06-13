import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types/portfolio';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const handleLinkClick = (url: string, type: string) => {
    console.log(`Clic sur le bouton ${type}, URL: ${url}`);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
      console.log(`Ouverture réussie de ${url}`);
    } catch (error) {
      console.error(`Erreur lors de l'ouverture de ${url}:`, error);
    }
  };

  const isValidUrl = (url: string) => {
    return url && url.trim() !== '' && url !== 'https://demo.com';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full transform group-hover:scale-110 transition-transform duration-500 align-items-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {isValidUrl(project.github) && (
                <button
                  onClick={() => handleLinkClick(project.github, 'Code')}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg transition-colors duration-300 cursor-pointer border-none"
                  type="button"
                >
                  <FaGithub className="mr-2" /> Code
                </button>
              )}
              {isValidUrl(project.demo) && (
                <button
                  onClick={() => handleLinkClick(project.demo, 'Demo')}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 cursor-pointer border-none"
                  type="button"
                >
                  <FaExternalLinkAlt className="mr-2" /> Demo
                </button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
