import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/home/pages/home/home').then(m => m.Home)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/pages/about/about').then(m => m.About)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/skills/pages/skills/skills').then(m => m.Skills)
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./features/experience/pages/experience/experience').then(m => m.Experience)
      },
      {
        path: 'projects/:id',
        loadComponent: () =>
          import('./features/projects/components/project-details/project-details').then(m => m.ProjectDetails)
      },
      {
        path: 'projects',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/projects/pages/projects/projects').then(m => m.Projects)
      },
      {
        path: 'resume',
        loadComponent: () =>
          import('./features/resume/pages/resume/resume').then(m => m.Resume)
      },
      {
        path: 'assistant',
        loadComponent: () =>
          import('./features/assistant/pages/assistant/assistant').then(m => m.Assistant)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/pages/contact/contact').then(m => m.Contact)
      }
    ]
  },

  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/admin/pages/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/admin/pages/login/login').then(m => m.Login)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];