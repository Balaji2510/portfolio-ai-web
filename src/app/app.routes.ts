import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { authGuard } from './core/guards/auth-guard';

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
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'projects',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/projects-list/projects-list').then(m => m.ProjectsList)
      },
      {
        path: 'projects/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/projects-form/projects-form').then(m => m.ProjectsForm)
      },
      {
        path: 'skills',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/skills-list/skills-list').then(m => m.SkillsList)
      },
      {
        path: 'skills/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/skills-form/skills-form').then(m => m.SkillsForm)
      },
      {
        path: 'experience',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/experience-list/experience-list').then(m => m.ExperienceList)
      },
      {
        path: 'experience/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/experience-form/experience-form').then(m => m.ExperienceForm)
      },
      {
        path: 'education',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/education-list/education-list').then(m => m.EducationList)
      },
      {
        path: 'education/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/education-form/education-form').then(m => m.EducationForm)
      },
      {
        path: 'messages',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/messages-list/messages-list').then(m => m.MessagesList)
      },
      {
        path: 'messages/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/messages-details/messages-details').then(m => m.MessagesDetails)
      },
      {
        path: 'blogs',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/blogs-list/blogs-list').then(m => m.BlogsList)
      },
      {
        path: 'blogs/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/blogs-form/blogs-form').then(m => m.BlogsForm)
      },
      {
        path: 'certificates',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/certificates-list/certificates-list').then(m => m.CertificatesList)
      },
      {
        path: 'certificates/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/certificates-form/certificates-form').then(m => m.CertificatesForm)
      },
      {
        path: 'statistics',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/statistics-list/statistics-list').then(m => m.StatisticsList)
      },
      {
        path: 'statistics/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/statistics-form/statistics-form').then(m => m.StatisticsForm)
      },
      {
        path: 'settings',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/settings-form/settings-form').then(m => m.SettingsForm)
      },
      {
        path: 'users',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/users-list/users-list').then(m => m.UsersList)
      },
      {
        path: 'users/:id',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/pages/users-form/users-form').then(m => m.UsersForm)
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