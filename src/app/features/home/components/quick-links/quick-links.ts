import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuickLink } from '../../../../core/models';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.scss'
})
export class QuickLinks {

  links: QuickLink[] = [

    {
      title: 'Projects',
      description: 'Explore my latest projects.',
      icon: '🚀',
      route: '/projects',
      external: false
    },

    {
      title: 'Resume',
      description: 'Download my latest resume.',
      icon: '📄',
      route: '/resume',
      external: false
    },

    {
      title: 'AI Assistant',
      description: 'Ask anything about me.',
      icon: '🤖',
      route: '/assistant',
      external: false
    },

    {
      title: 'GitHub',
      description: 'View my repositories.',
      icon: '💻',
      url: 'https://github.com/YOUR_USERNAME',
      external: true
    },

    {
      title: 'LinkedIn',
      description: 'Connect with me.',
      icon: '💼',
      url: 'https://linkedin.com/in/YOUR_USERNAME',
      external: true
    },

    {
      title: 'Contact',
      description: `Let's work together.`,
      icon: '📧',
      route: '/contact',
      external: false
    }

  ];
}
