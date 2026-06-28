import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Chat} from '../../../../core/models';

@Component({
  selector: 'app-chat-history',
  standalone: true,
  imports: [],
  templateUrl: './chat-history.html',
  styleUrls: ['./chat-history.scss'],
})
export class ChatHistory {

  @Input()
  chats: Chat[] = [];

  @Input()
  selectedChatId = '';

  @Output()
  newChat = new EventEmitter<void>();

  @Output()
  openChat = new EventEmitter<string>();

  @Output()
  deleteChat = new EventEmitter<string>();

}
