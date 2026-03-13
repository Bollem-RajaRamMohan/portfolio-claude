export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
  featured?: boolean;
  year?: string;
  role?: string;
  challenges?: string;
  solution?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}
