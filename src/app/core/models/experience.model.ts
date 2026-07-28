export interface Experience {

  id: number;

  company: string;

  companyLogo: string;

  designation: string;

  startDate: Date;

  endDate?: Date;

  location: string;

  employmentType: string;

  workMode: string;

  technologies: string[];

  description?: string;

  responsibilities: string[];

  current: boolean;

}