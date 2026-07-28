import { Component, OnInit, signal, inject } from '@angular/core';
import { CrudService } from '../../../../core/services/crud.service';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction implements OnInit {
   private crudService = inject(CrudService);

   technologies = signal<string[]>([]);

   ngOnInit() {
      this.crudService.getAll('skills').subscribe({
        next: (res) => {
          if (res.success && res.data) {
            const docs = res.data.docs || res.data;
            const featuredTechs = docs.filter((s: any) => s.featured).map((s: any) => s.name);
            if (featuredTechs.length > 0) {
              this.technologies.set(featuredTechs.slice(0, 8));
            } else {
              this.technologies.set(docs.map((s: any) => s.name).slice(0, 8));
            }
          }
        },
        error: () => {}
      });
   }
}
