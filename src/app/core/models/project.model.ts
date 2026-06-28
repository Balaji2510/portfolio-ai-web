export interface Project {

  id: string;

  title: string;

  slug: string;

  description: string;

  shortDescription: string;

  image: string;

  gallery: string[];

  technologies: string[];

  github: string;

  liveDemo: string;

  featured: boolean;

  startDate: Date;

  endDate: Date;

}