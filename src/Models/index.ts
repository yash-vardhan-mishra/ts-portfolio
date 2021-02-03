export interface ResumeData {
  main: IMain;
  resume: IResume;
  portfolio: IPortfolio;
  testimonials: ITestimonials;
}

export interface IMain {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: IAddress;
  website: string;
  resumedownload: string;
  social: ISocial[];
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface ISocial {
  name: string;
  url: string;
  className: string;
}

export interface IPortfolio {
  projects: IProject[];
}

export interface IProject {
  title: string;
  category: string;
  image: string;
  url: string;
}

export interface IResume {
  skillmessage: string;
  education: IEducation[];
  work: IWork[];
  skills: ISkill[];
}

export interface IEducation {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface ISkill {
  name: string;
  level: string;
}

export interface IWork {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface ITestimonials {
  testimonials: ITestimonial[];
}

export interface ITestimonial {
  text: string;
  user: string;
}
