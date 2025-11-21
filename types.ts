export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  date: string;
  honors?: string[];
  coursework?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  description: string[];
  link?: string[];
}

export interface ResearchItem {
  title: string;
  status: string;
  description: string[];
}

export interface HackathonItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface AwardItem {
  title: string;
  institution: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  link?: string;
}