import { Component } from '@angular/core';
import { ProjectFilter } from "../project-filter/project-filter";
import { ProjectCard } from "../project-card/project-card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  liveDemo: string;
  featured: boolean;
}

@Component({
  selector: 'app-project-list',
  imports: [ProjectFilter, ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList {
  

    allProjects: Project[] = [

    {
      id: 1,
      title: 'PortfolioAI',
      description: 'AI-powered developer portfolio with Angular, Node.js, MongoDB and RAG.',
      image: 'assets/projects/portfolio-ai.png',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AI'],
      github: '#',
      liveDemo: '#',
      featured: true
    },

    {
      id: 2,
      title: 'Vendor Management System',
      description: 'Enterprise vendor management platform with GraphQL and AWS.',
      image: 'assets/projects/vendor.png',
      technologies: ['Angular', 'GraphQL', 'AWS'],
      github: '#',
      liveDemo: '#',
      featured: false
    },

    {
      id: 3,
      title: 'Notification System',
      description: 'Real-time notification platform using AWS AppSync.',
      image: 'assets/projects/notification.png',
      technologies: ['AppSync', 'Angular', 'AWS'],
      github: '#',
      liveDemo: '#',
      featured: true
    }

  ];
  projects: Project[] = [...this.allProjects];


  filterProjects(filter: string) {

    if (filter === 'All') {

        this.projects = [...this.allProjects];

        return;

    }

    this.projects = this.allProjects.filter(project =>
        project.technologies.includes(filter)
    );

}
}
