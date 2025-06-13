import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import portfolioData from '../data/portfolio-data.json';
import SectionTitle from './SectionTitle';
import SkillsGrid from './SkillsGrid';
import ProjectsGrid from './ProjectsGrid';
import HeroSection from './HeroSection';
import { PortfolioData } from '../types/portfolio';
import { iconMap } from '../config/icons';

const Portfolio: React.FC = () => {
  const [data] = useState<PortfolioData>(portfolioData as PortfolioData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    e.currentTarget.reset();
    alert('Message envoyé avec succès !');
  };

  const skills = data.skills.map((skill: any) => {
    const Icon = iconMap[skill.icon as keyof typeof iconMap];
    return {
      ...skill,
      icon: <Icon className={skill.color} />
    };
  });

  const projects = data.projects;

  return (
    <div className="min-h-screen relative">

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>À propos</SectionTitle>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Je suis un développeur full-stack passionné par la création d'applications web modernes et performantes.
              Avec plus de X années d'expérience, j'ai travaillé sur divers projets allant des applications e-commerce
              aux systèmes de gestion complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Compétences</SectionTitle>
          <SkillsGrid skills={skills as any} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle>Projets</SectionTitle>
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionTitle>Contact</SectionTitle>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-center text-gray-600 mb-8">
                Intéressé par une collaboration ? N'hésitez pas à me contacter !
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer
                </motion.button>
              </form>
              <div className="mt-8 pt-8 border-t flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/guiguil03"
                  className="text-4xl text-gray-600 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/guillaume-lafay-326b01261/"
                  className="text-4xl text-gray-600 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:email@example.com"
                  className="text-4xl text-gray-600 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
