export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export interface PortfolioData {
  skills: Skill[];
  projects: Project[];
}

