import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../../../core/services/crud.service';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.html',
  styleUrls: ['../../../admin/pages/projects-form/projects-form.scss']
})
export class Contact {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);

  submitting = signal<boolean>(false);
  successMessage = signal<string>('');
  errorMessage = signal<string>('');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.successMessage.set('');
    this.errorMessage.set('');

    const data = this.contactForm.value;

    this.crudService.create('contact', data).subscribe({
      next: (res) => {
        this.successMessage.set('Thank you! Your message has been sent successfully.');
        this.contactForm.reset();
        this.submitting.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to send message.');
        this.submitting.set(false);
      }
    });
  }
}
