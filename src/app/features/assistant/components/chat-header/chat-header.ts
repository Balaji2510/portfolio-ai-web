import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Theme } from '../../../../core/services/theme';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  templateUrl: './chat-header.html',
  styleUrl: './chat-header.scss',
})
export class ChatHeader {
  @Output() toggleSidebar = new EventEmitter<void>();
  themeService = inject(Theme);
}
