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
  selector: 'app-blogs-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './blogs-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class BlogsForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  blogForm = this.fb.group({
    title: ['', Validators.required],
    slug: ['', Validators.required],
    category: ['General'],
    tags: [''],
    summary: ['', Validators.required],
    content: ['', Validators.required],
    coverImage: [''],
    author: [''],
    published: [false]
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
    this.crudService.getById('blogs', this.itemId).subscribe({
      next: (res) => {
          const data = res.data;
          if (Array.isArray(data.tags)) {
            data.tags = data.tags.join(', ');
          }
          this.blogForm.patchValue(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.blogForm.invalid) {
      this.blogForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data: any = { ...this.blogForm.value };
    
    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t);
    }

    const request = this.isEdit 
      ? this.crudService.update('blogs', this.itemId, data)
      : this.crudService.create('blogs', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/blogs']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save blog');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/blogs']);
  }
}
