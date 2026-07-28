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
  selector: 'app-users-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './users-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class UsersForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['USER', Validators.required],
    isActive: [true]
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
    this.crudService.getById('admin/users', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          this.userForm.patchValue(res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data = this.userForm.value;

    if (this.isEdit) {
      // First update core user details
      this.crudService.update('admin/users', this.itemId, { name: data.name, email: data.email }).subscribe({
        next: () => {
          // Then patch status
          this.crudService.patch('admin/users', `${this.itemId}/status`, { isActive: data.isActive }).subscribe({
            next: () => {
              // Then patch role
              this.crudService.patch('admin/users', `${this.itemId}/role`, { role: data.role }).subscribe({
                next: () => this.router.navigate(['/admin/users']),
                error: (err) => this.handleError(err)
              });
            },
            error: (err) => this.handleError(err)
          });
        },
        error: (err) => this.handleError(err)
      });
    } else {
       // Note: Creating user usually goes through auth/register with password, 
       // but for admin simplicity, we'll assume we don't create users from here unless the API supports it.
       // The API doesn't have POST /admin/users, so creating a user here will fail. We'll show an error.
       this.errorMessage.set('Creating users directly is not supported via this API yet. Please use the registration page.');
       this.submitting.set(false);
    }
  }

  handleError(err: any) {
    this.errorMessage.set(err.error?.message || 'Operation failed');
    this.submitting.set(false);
  }

  onCancel() {
    this.router.navigate(['/admin/users']);
  }
}
