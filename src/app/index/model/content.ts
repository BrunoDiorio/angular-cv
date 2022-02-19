export interface Content {
  header: Header;
  description: string;
  experiences: Experience;
  personalData: PersonalData;
  skills: Skill[];
}

export interface Header {
  title: string;
  subtitle: string;
}

export interface Experience {
  title: string;
  data: ExperienceData[];
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  period: string;
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  stacks: string;
}

export interface PersonalData {
  address: string;
  dob: string;
  celphone: string;
  email: string;
  linkedIn: string;
}

export interface Skill {
  title: string;
  items: string[];
}

