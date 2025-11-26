import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaUserGraduate, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { EMAIL_CONFIG } from '../config/email';
import portfolioData from '../data/portfolio-data.json';
import SectionTitle from './SectionTitle';
import SkillsGrid from './SkillsGrid';
import ProjectsGrid from './ProjectsGrid';
import HeroSection from './HeroSection';
import { WavyBackground } from '@/components/ui/wavy-background';
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
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle>À propos</SectionTitle>

          <div className="mt-10 grid gap-10 md:grid-cols-[3fr,2fr] items-start">
            {/* Texte principal */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed">
                Je suis un <span className="font-semibold">développeur Full‑Stack</span> qui aime transformer des
                idées en applications concrètes, modernes et performantes. Mon terrain de jeu principal :
                <span className="font-semibold"> JavaScript / TypeScript, React / Next.js et Node.js</span>.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Actuellement en <span className="font-semibold">MBA Développement Full‑Stack à MyDigitalSchool Paris</span>,
                je travaille sur des projets réels (applications web, mobile, APIs, backends) pour consolider mes
                compétences techniques et ma compréhension des besoins métiers, après un cursus à l&apos;Université
                d&apos;Évry Paris‑Saclay.
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Ce qui me motive : concevoir des produits qui ont un impact, avec un code propre, des interfaces
                claires et une expérience utilisateur fluide. J&apos;aime particulièrement collaborer avec les autres
                (design, produit, métier) et faire avancer un projet par itérations rapides.
              </p>
            </div>

            {/* Cartes synthétiques */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaUserGraduate className="h-5 w-5 text-purple-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-200">
                    Profil
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Développeur Full‑Stack · MBA MyDigitalSchool Paris · basé en Île‑de‑France.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaCode className="h-5 w-5 text-purple-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-200">
                    Stack principal
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, Tailwind CSS.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <FaUsers className="h-5 w-5 text-purple-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-200">
                    Façon de travailler
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Communication claire, écoute du besoin, code lisible, livraisons fréquentes et feedback rapide.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-200/70 dark:border-purple-800/70 bg-gradient-to-br from-purple-50/80 via-white/70 to-fuchsia-50/80 dark:from-purple-900/40 dark:via-neutral-900/60 dark:to-fuchsia-900/30 p-5 shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <FaLightbulb className="h-5 w-5 text-purple-500" />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-100">
                    Objectif
                  </h3>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-200">
                  Rejoindre des projets où je peux intervenir sur tout le cycle produit, de l&apos;idée au
                  déploiement,et continuer à progresser sur des stacks modernes.
                </p>
              </div>
            </div>
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
      <section id="contact" className="relative bg-black text-white">
        <WavyBackground
          containerClassName="py-16 md:py-24"
          className="max-w-2xl mx-auto px-6"
          waveOpacity={0.5}
          fullHeight={false}
        >
          <SectionTitle>Contact</SectionTitle>
          <div className="bg-black/70 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/40 p-8 mt-8 backdrop-blur-xl">
            <p className="text-center text-neutral-200 mb-8">
              Intéressé par une collaboration ? N&apos;hésitez pas à me contacter.
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
                  <label htmlFor="name" className="block text-neutral-200 mb-2 font-medium">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-purple-500/40 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors disabled:bg-black/40 placeholder:text-neutral-400"
                    placeholder="Votre nom"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-neutral-200 mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-purple-500/40 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors disabled:bg-black/40 placeholder:text-neutral-400"
                    placeholder="votre@email.com"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-neutral-200 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-2 border border-purple-500/40 bg-black/40 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none disabled:bg-black/40 placeholder:text-neutral-400"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl transition-all duration-200 font-semibold ${isSubmitting
                  ? 'bg-purple-900/60 cursor-not-allowed text-white'
                  : 'bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 shadow-lg shadow-purple-500/40 text-white'
                  }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-neutral-800">
              <p className="text-center text-neutral-300 mb-4">
                Ou contactez-moi directement :
              </p>
              <div className="text-center">
                <a
                  href="mailto:Guillaumel1103@gmail.com"
                  className="inline-flex items-center text-purple-300 hover:text-white transition-colors text-lg font-medium"
                >
                  <FaEnvelope className="mr-2" />
                  Guillaumel1103@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-800 flex justify-center space-x-6">
              <motion.a
                href="https://github.com/guiguil03"
                className="text-4xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/guillaume-lafay-326b01261/"
                className="text-4xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="mailto:GUillaumel1103@gmail.com"
                className="text-4xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </WavyBackground>
      </section>
    </div>
  );
};

export default Portfolio;
