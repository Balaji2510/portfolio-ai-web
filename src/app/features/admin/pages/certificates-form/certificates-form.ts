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
  selector: 'app-certificates-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './certificates-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class CertificatesForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  certForm = this.fb.group({
    title: ['', Validators.required],
    provider: ['', Validators.required],
    credentialId: [''],
    credentialUrl: [''],
    issueDate: [''],
    skills: [''],
    image: [''],
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
    this.crudService.getById('certificates', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          const data = res.data;
          // Format dates for mat-datepicker
          if (data.issueDate) data.issueDate = new Date(data.issueDate);
          
          if (Array.isArray(data.skills)) {
            data.skills = data.skills.join(', ');
          }
          this.certForm.patchValue(data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.certForm.invalid) {
      this.certForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data: any = { ...this.certForm.value };

    if (typeof data.skills === 'string') {
      data.skills = data.skills.split(',').map((s: string) => s.trim()).filter((s: string) => s);
    }

    const request = this.isEdit 
      ? this.crudService.update('certificates', this.itemId, data)
      : this.crudService.create('certificates', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/certificates']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save certificate');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/certificates']);
  }
}
