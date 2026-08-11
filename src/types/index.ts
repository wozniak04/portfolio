export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Full-Stack' | 'AI / Machine Learning' | 'Web App' | 'Data / Tools' | 'Other';
  featured: boolean;
  awardBadge?: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  features: string[];
  architectureOverview?: string;
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  date: string;
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
