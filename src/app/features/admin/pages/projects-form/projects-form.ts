import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-projects-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './projects-form.html',
  styleUrl: './projects-form.scss' // Shared form styles can go here
})
export class ProjectsForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  projectForm = this.fb.group({
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    technologies: [''], // user will input comma separated values
    thumbnail: [''],
    githubUrl: [''],
    liveUrl: [''],
    status: ['ACTIVE'],
    featured: [false]
  });

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    if (this.itemId && this.itemId !== 'new') {
      this.isEdit = true;
      this.loadData();
    }
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getById('projects', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          const projectData = res.data;
          if (Array.isArray(projectData.technologies)) {
            projectData.technologies = projectData.technologies.join(', ');
          }
          this.projectForm.patchValue(projectData);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data: any = { ...this.projectForm.value };
    
    // Parse technologies back to array
    if (typeof data.technologies === 'string') {
      data.technologies = data.technologies.split(',').map((t: string) => t.trim()).filter((t: string) => t);
    }

    const request = this.isEdit 
      ? this.crudService.update('projects', this.itemId, data)
      : this.crudService.create('projects', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/projects']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save project');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/projects']);
  }
}
