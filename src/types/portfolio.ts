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
  github?: string;
  demo?: string;
  /** Lien direct vers l'application sur l'App Store / Google Play */
  appStore?: string;
  /** Petit logo affiché en médaillon par-dessus l'image principale */
  logo?: string;
  /** 'contain' pour un logo/visuel qui ne doit pas être rogné (par défaut : 'cover' pour une capture d'écran) */
  fit?: 'cover' | 'contain';
  /** Force l'étiquette web/mobile quand elle n'est pas déductible du stack technique */
  type?: 'web' | 'mobile';
}

export interface PortfolioData {
  skills: Skill[];
  projects: Project[];
}

