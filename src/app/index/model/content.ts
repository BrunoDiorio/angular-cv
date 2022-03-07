export interface Content {
  header: Header;
  description: string;
  experiences: Experience;
  personalData: PersonalData;
  formation: Formation;
  skills: Section[];
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
  currentJobStartDate: string;
  responsabilities: Section;
  achievement: Section;
}

export interface PersonalData {
  title: string;
  address: Section;
  dob: Section;
  cellphone: Section;
  email: Section;
  linkedIn: Section;
  github: Section;
}

export interface Formation {
  title: string;
  data: FormationData[];
}

export interface FormationData {
  date: string;
  description: string;
  teachingEntity: string
}

export interface Section {
  title: string;
  subtitle: string;
  list: string[];
  value: string;
}
