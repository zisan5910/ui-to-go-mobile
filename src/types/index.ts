
export interface LanguageContent {
  en: string;
  bn: string;
}

export interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  target?: string;
}

export interface EducationItem {
  id: string;
  title: LanguageContent;
  institution: LanguageContent;
  duration: LanguageContent;
  gpa: LanguageContent;
  details: LanguageContent[];
  link: string;
  icon: React.ReactNode;
}

export interface ExperienceItem {
  id: string;
  type: 'volunteer' | 'development';
  title: LanguageContent;
  role: LanguageContent;
  links?: Array<{
    label: LanguageContent;
    url: string;
    icon: React.ReactNode;
  }>;
  achievements?: Array<{
    description: LanguageContent;
    icon: React.ReactNode;
  }>;
  projects?: Array<{
    name: LanguageContent;
    description: LanguageContent;
    url: string;
  }>;
  borderColor: string;
  bgColor: string;
  hoverBgColor: string;
  iconColor: string;
}

export interface Certificate {
  title: LanguageContent;
  image: string;
}

export interface SkillCategory {
  title: LanguageContent;
  skills: Array<{
    name: LanguageContent;
    level: number;
  }>;
}

export interface ContactItem {
  icon: React.ReactNode;
  content: LanguageContent;
  link: string;
  isExternal: boolean;
}

export interface FamilyMember {
  relation: LanguageContent;
  name: LanguageContent;
  link?: string;
}

export interface PersonalDetail {
  label: LanguageContent;
  value: LanguageContent;
  link?: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  color: string;
}
