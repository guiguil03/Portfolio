import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaUserGraduate, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { EMAIL_CONFIG } from '../config/email';
import portfolioData from '../data/portfolio-data.json';
import SectionTitle from './SectionTitle';
import SkillsGrid from './SkillsGrid';
import ProjectsGrid from './ProjectsGrid';
import HeroSection from './HeroSection';
import { PortfolioData } from '../types/portfolio';
import { iconMap } from '../config/icons';

const Portfolio: React.FC = () => {
  const [data] = useState<PortfolioData>(portfolioData as PortfolioData);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Paramètres pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL
      };

      // Envoi de l'email via EmailJS
      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitMessage('✅ Message envoyé avec succès ! Je vous répondrai rapidement.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('❌ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 6000);
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
      <section id="about" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <SectionTitle>À propos</SectionTitle>
          <BentoGrid className="max-w-4xl mx-auto">
            <BentoGridItem
              title="Mon Parcours"
              description="Actuellement en MBA de Développement Full Stack à MyDigitalSchool Paris, je continue de développer mes compétences en développement web et mobile, et j'ai acquis une solide expérience académique et professionnelle, notamment à l'Université Évry Paris-Saclay."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                    alt="Coding setup"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              }
              icon={<FaUserGraduate className="h-4 w-4 text-neutral-500" />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Expertise Technique"
              description="Je maîtrise un large éventail de technologies : Front-end, Back-end, Mobile. Ce qui me permet de développer des applications web et mobiles robustes et performantes."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
                    alt="Code screen"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              }
              icon={<FaCode className="h-4 w-4 text-neutral-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Soft Skills"
              description="Communication, Travail d'équipe, Résolution de problèmes, Adaptabilité."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Teamwork"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              }
              icon={<FaUsers className="h-4 w-4 text-neutral-500" />}
              className="md:col-span-1"
            />
            <BentoGridItem
              title="Ma Vision"
              description="Je conçois des solutions web et mobiles robustes et performantes, avec une attention particulière portée à l'expérience utilisateur et à la qualité du code. Je suis passionné par le développement web et mobile et je suis toujours à la recherche de nouvelles technologies et de nouvelles opportunités."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
                    alt="Vision"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              }
              icon={<FaLightbulb className="h-4 w-4 text-neutral-500" />}
              className="md:col-span-2"
            />
          </BentoGrid>
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

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg text-center ${submitMessage.includes('✅')
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                    }`}
                >
                  {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nom *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:bg-gray-100"
                      placeholder="Votre nom"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors disabled:bg-gray-100"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none disabled:bg-gray-100"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg transition-all duration-200 font-medium ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-primary text-white hover:bg-secondary hover:shadow-lg'
                    }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <p className="text-center text-gray-600 mb-4">
                  Ou contactez-moi directement :
                </p>
                <div className="text-center">
                  <a
                    href="mailto:Guillaumel1103@gmail.com"
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors text-lg font-medium"
                  >
                    <FaEnvelope className="mr-2" />
                    Guillaumel1103@gmail.com
                  </a>
                </div>
              </div>

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
                  href="mailto:GUillaumel1103@gmail.com"
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
