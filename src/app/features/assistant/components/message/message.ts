import { Component, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { Message } from '../../../../core/models';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Messages {
  @Input({ required: true })
  message!: Message;

  copied = false;

  copy() {

    navigator.clipboard.writeText(this.message.content);

    this.copied = true;

    setTimeout(() => {

      this.copied = false;

    }, 2000);

  }
}
