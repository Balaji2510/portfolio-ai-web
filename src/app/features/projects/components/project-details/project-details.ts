import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
   project = {

    title: 'PortfolioAI',

    category: 'AI Portfolio',

    description:
      'An AI-powered developer portfolio built using Angular, Node.js, MongoDB, RAG and OpenRouter.',

    duration: '2 Weeks',

    role: 'Full Stack Developer',

    client: 'Personal Project',

    github: '#',

    demo: '#',

    technologies: [
      'Angular',
      'Node.js',
      'MongoDB',
      'Express',
      'AI',
      'RAG',
      'Vercel'
    ],

    features: [

      'AI Portfolio Assistant',

      'Resume Chat',

      'Project Showcase',

      'Authentication',

      'Responsive UI',

      'Admin Dashboard'

    ],

    images: [

      'assets/projects/portfolio/home.png',

      'assets/projects/portfolio/chat.png',

      'assets/projects/portfolio/admin.png'

    ]

  };

}
