export interface Project {

  id: string;

  title: string;

  slug: string;

  description: string;

  shortDescription: string;

  thumbnail: string;

  gallery: string[];

  technologies: string[];

  githubUrl: string;

  liveUrl: string;

  featured: boolean;

  startDate: Date;

  endDate: Date;

}