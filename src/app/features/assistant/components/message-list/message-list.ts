import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../../../core/models';
import { TypingIndicator } from "../typing-indicator/typing-indicator";
import { Messages } from "../message/message";

@Component({
  selector: 'app-message-list',
  imports: [TypingIndicator, Messages],
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
})
export class MessageList {


  @Input()
  messages: Message[] = [];

  @Input()
  loading = false;

  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewChecked(): void {

    this.scrollToBottom();

  }

  private scrollToBottom(): void {

    if (!this.scrollContainer) return;

    const element = this.scrollContainer.nativeElement;

    element.scrollTop = element.scrollHeight;

  }

}
