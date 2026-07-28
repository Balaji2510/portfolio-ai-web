import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../../../core/services/crud.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './settings-form.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class SettingsForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);

  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  successMessage = signal<string>('');
  errorMessage = signal<string>('');

  settingsForm = this.fb.group({
    siteName: ['', Validators.required],
    tagline: [''],
    description: [''],
    email: ['', Validators.email],
    phone: [''],
    location: [''],
    github: [''],
    linkedin: [''],
    twitter: [''],
    theme: ['light'],
    maintenanceMode: [false]
  });

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.crudService.getAll('settings').subscribe({ // Note: our GET endpoint is registered as /settings
      next: (res) => {
        if(res.success && res.data) {
          this.settingsForm.patchValue(res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.settingsForm.invalid) {
      this.settingsForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');
    const data = this.settingsForm.value;

    this.crudService.update('settings', '', data).subscribe({
      next: (res) => {
        this.successMessage.set('Settings saved successfully!');
        this.submitting.set(false);
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save settings');
        this.submitting.set(false);
      }
    });
  }
}
