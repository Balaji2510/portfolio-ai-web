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
  selector: 'app-skills-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './skills-form.html',
  styleUrls: ['../projects-form/projects-form.scss'] // Reusing the same generic form styles
})
export class SkillsForm implements OnInit {
  private fb = inject(FormBuilder);
  private crudService = inject(CrudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;
  itemId = '';
  loading = signal<boolean>(false);
  submitting = signal<boolean>(false);
  errorMessage = signal<string>('');

  skillForm = this.fb.group({
    name: ['', Validators.required],
    category: ['Frontend', Validators.required],
    icon: [''],
    level: [50, [Validators.required, Validators.min(0), Validators.max(100)]],
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
    this.crudService.getById('skills', this.itemId).subscribe({
      next: (res) => {
        if(res.success) {
          this.skillForm.patchValue(res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  onSubmit() {
    if (this.skillForm.invalid) {
      this.skillForm.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    const data = this.skillForm.value;

    const request = this.isEdit 
      ? this.crudService.update('skills', this.itemId, data)
      : this.crudService.create('skills', data);

    request.subscribe({
      next: () => {
        this.router.navigate(['/admin/skills']);
      },
      error: (err) => {
        this.errorMessage.set(err.error?.message || 'Failed to save skill');
        this.submitting.set(false);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/admin/skills']);
  }
}
