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
  selector: 'app-education-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './education-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class EducationForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  eduForm = this.fb.group({
    institution: ['', Validators.required],
    degree: ['', Validators.required],
    specialization: ['', Validators.required],
    startYear: [null, Validators.required],
    endYear: [null],
    current: [false],
    cgpa: [null],
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
    this.crudService.getById('education', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          const data = res.data;
          // Format dates for mat-datepicker
          if (data.startDate) data.startDate = new Date(data.startDate);
          if (data.endDate) data.endDate = new Date(data.endDate);
          this.eduForm.patchValue(data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.eduForm.invalid) {
      this.eduForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data = this.eduForm.value;

    const request = this.isEdit 
      ? this.crudService.update('education', this.itemId, data)
      : this.crudService.create('education', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/education']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save education');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/education']);
  }
}
