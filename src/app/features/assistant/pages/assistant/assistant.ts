import { Component } from '@angular/core';
import { Chat, Message } from '../../../../core/models';
import { ChatHeader } from "../../components/chat-header/chat-header";
import { ChatHistory } from "../../components/chat-history/chat-history";
import { MessageList } from "../../components/message-list/message-list";
import { SuggestionChips } from "../../components/suggestion-chips/suggestion-chips";
import { ChatInput } from "../../components/chat-input/chat-input";

@Component({
  selector: 'app-assistant',
  imports: [ChatHeader, ChatHistory, MessageList, SuggestionChips, ChatInput],
  templateUrl: './assistant.html',
  styleUrl: './assistant.scss',
})
export class Assistant {
send($event: string) {
   
  
}
  chats: Chat[] = [

    {
      id: '1',
      title: 'Introduction',
      lastMessage: 'Tell me about yourself',
      updatedAt: new Date()
    },

    {
      id: '2',
      title: 'Projects',
      lastMessage: 'Show your projects',
      updatedAt: new Date()
    }

  ];

  selectedChatId = '1';

  messages: Message[] = [];

  loading = false;

  createChat() {

    console.log('Create Chat');

  }

  openChat(id: string) {

    this.selectedChatId = id;

  }

  removeChat(id: string) {

    this.chats = this.chats.filter(chat => chat.id !== id);

  }

}
