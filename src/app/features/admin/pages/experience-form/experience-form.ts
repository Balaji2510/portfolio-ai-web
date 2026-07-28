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
  selector: 'app-experience-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './experience-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class ExperienceForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  expForm = this.fb.group({
    company: ['', Validators.required],
    designation: ['', Validators.required],
    responsibilities: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: [''],
    current: [false],
    location: [''],
    status: ['ACTIVE']
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
    this.crudService.getById('experience', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          const data = res.data;
          // Format dates for mat-datepicker
          if (data.startDate) data.startDate = new Date(data.startDate);
          if (data.endDate) data.endDate = new Date(data.endDate);
          
          if (Array.isArray(data.responsibilities)) {
            data.responsibilities = data.responsibilities.join('\n');
          }
          this.expForm.patchValue(data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.expForm.invalid) {
      this.expForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data: any = { ...this.expForm.value };
    
    if (typeof data.responsibilities === 'string') {
      data.responsibilities = data.responsibilities.split('\n').map((r: string) => r.trim()).filter((r: string) => r);
    }

    const request = this.isEdit 
      ? this.crudService.update('experience', this.itemId, data)
      : this.crudService.create('experience', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/experience']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save experience');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/experience']);
  }
}
