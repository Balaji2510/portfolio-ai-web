import { Component, Input } from '@angular/core';

interface MessageContent {
  content: string;
}

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Messages {
  @Input({ required: true })
  message!: MessageContent;

  copied = false;

  copy() {

    navigator.clipboard.writeText(this.message.content);

    this.copied = true;

    setTimeout(() => {

      this.copied = false;

    }, 2000);

  }
}
