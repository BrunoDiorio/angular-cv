export interface Content {
  header: Header;
  description: string;
  experiences: Experience;
  personalData: PersonalData;
  formation: formation;
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
  fullPeriod: string;
  projects: Project[];
}

export interface Project {
  title: string;
  descriptions: string[];
  stacks: string;
}

export interface PersonalData {
  title: string;
  address: string;
  dob: string;
  celphone: string;
  email: string;
  linkedIn: string;
}

export interface formation {
  title: string;
  data: FormationData[];
}

export interface FormationData {
  date: string;
  description: string;
  teachingEntity: string
}

export interface Skill {
  title: string;
  items: string[];
}

