import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.scss'
})
export class ChatInput {

  @Output()
  sendMessage = new EventEmitter<string>();

  message = signal('');

  loading = signal(false);

  maxLength = 1000;

  send() {

    const text = this.message().trim();

    if (!text || this.loading()) {
      return;
    }

    this.sendMessage.emit(text);

    this.message.set('');

  }

  onKeyDown(event: KeyboardEvent) {

    if (event.key === 'Enter' && !event.shiftKey) {

      event.preventDefault();

      this.send();

    }

  }

}
