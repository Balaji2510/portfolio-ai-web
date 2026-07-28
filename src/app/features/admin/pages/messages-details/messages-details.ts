import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../../../core/services/crud.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './messages-details.html',
  styleUrls: ['../projects-form/projects-form.scss']
})
export class MessagesDetails implements OnInit {
  private crudService = inject(CrudService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  messageId = '';
  message = signal<any>(null);
  loading = signal<boolean>(true);
  replying = signal<boolean>(false);
  successMessage = signal<string>('');
  
  replyForm = this.fb.group({
    message: ['', Validators.required]
  });

  ngOnInit() {
    this.messageId = this.route.snapshot.paramMap.get('id') || '';
    if (this.messageId) {
      this.loadMessage();
    }
  }

  loadMessage() {
    this.loading.set(true);
    this.crudService.getById('contact', this.messageId).subscribe({
      next: (res) => {
        if(res.success) {
          this.message.set(res.data);
        }
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  markAsRead() {
    this.crudService.patch('contact', `${this.messageId}/read`, {}).subscribe({
      next: () => {
        this.loadMessage();
        this.successMessage.set('Marked as read.');
        setTimeout(() => this.successMessage.set(''), 3000);
      }
    });
  }

  sendReply() {
    if (this.replyForm.invalid) return;
    this.replying.set(true);
    const data = this.replyForm.value;
    
    // Using CrudService create method to POST to the reply endpoint
    this.crudService.create(`contact/${this.messageId}/reply`, data).subscribe({
      next: () => {
        this.replying.set(false);
        this.successMessage.set('Reply sent successfully!');
        this.replyForm.reset();
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: () => this.replying.set(false)
    });
  }

  onBack() {
    this.router.navigate(['/admin/messages']);
  }
}
