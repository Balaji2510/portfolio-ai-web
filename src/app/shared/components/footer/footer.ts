import { Component, OnInit, signal, inject } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  private crudService = inject(CrudService);

  currentYear = new Date().getFullYear();

  settings = signal<any>({
    siteName: 'Balaji P',
    description: 'AI-Powered Developer Portfolio showcasing my expertise in Angular, Node.js, MongoDB, AWS, GraphQL, Artificial Intelligence and modern full-stack development.',
    github: 'https://github.com/Balaji2510',
    linkedin: 'https://linkedin.com/in/balajip2510',
    email: 'balajip2510@gmail.com',
    location: 'Chennai, Tamil Nadu, India'
  });

  technologies = signal<string[]>([]);

  ngOnInit() {
    this.crudService.getAll('settings').subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.settings.set(res.data);
        }
      },
      error: () => {}
    });

    this.crudService.getAll('skills').subscribe({
      next: (res) => {
        if (res.success && res.data) {
          const docs = res.data.docs || res.data;
          const techNames = docs.map((s: any) => s.name);
          this.technologies.set(techNames.slice(0, 8)); // Top 8 skills
        }
      },
      error: () => {}
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
