import { Component, OnInit } from '@angular/core';
import { Chat, Message } from '../../../../core/models';
import { Chat as ChatService } from '../../../../core/services/chat';
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
export class Assistant implements OnInit {
  chats: Chat[] = [];
  selectedChatId: string = '';
  messages: Message[] = [];
  loading = false;
  isSidebarOpen = false;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.isSidebarOpen = window.innerWidth > 992;
    this.loadChats();
  }

  loadChats() {
    this.chatService.getUserChats().subscribe((res) => {
      if (res.success) {
        this.chats = res.data.map(c => ({
            id: (c as any)._id,
            title: c.title,
            lastMessage: '',
            updatedAt: c.updatedAt
        }));
        if (this.chats.length > 0) {
          this.openChat(this.chats[0].id);
        } else {
          this.createChat();
        }
      }
    });
  }

  send(messageText: string) {
    if (!this.selectedChatId || !messageText.trim()) return;
    
    // Auto-update title for new chats
    const currentChat = this.chats.find(c => c.id === this.selectedChatId);
    if (currentChat && currentChat.title === 'New Chat') {
      const newTitle = messageText.length > 28 ? messageText.substring(0, 28) + '...' : messageText;
      currentChat.title = newTitle;
      this.chatService.updateChatTitle(this.selectedChatId, newTitle).subscribe();
    }
    
    // Optimistic UI update
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: messageText, timestamp: new Date() };
    this.messages.push(userMsg);
    this.loading = true;

    this.chatService.sendMessage(this.selectedChatId, messageText).subscribe({
      next: (res) => {
        if (res.success) {
          this.messages.push(res.data.assistantMessage);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  createChat() {
    this.chatService.createChat('New Chat').subscribe((res) => {
      if (res.success) {
        const newChat = {
          id: (res.data as any)._id,
          title: res.data.title,
          lastMessage: '',
          updatedAt: res.data.updatedAt
        };
        this.chats.unshift(newChat);
        this.openChat(newChat.id);
      }
    });
  }

  openChat(id: string) {
    this.selectedChatId = id;
    this.loading = true;
    this.messages = [];
    if (window.innerWidth <= 992) {
      this.isSidebarOpen = false; // Close on mobile only
    }
    this.chatService.getChatById(id).subscribe({
        next: (res) => {
            if (res.success) {
                this.messages = res.data.messages;
            }
            this.loading = false;
        },
        error: () => {
            this.loading = false;
        }
    });
  }

  removeChat(id: string) {
    this.chatService.deleteChat(id).subscribe((res) => {
      if (res.success) {
        this.chats = this.chats.filter(chat => chat.id !== id);
        if (this.selectedChatId === id) {
          if (this.chats.length > 0) {
            this.openChat(this.chats[0].id);
          } else {
            this.selectedChatId = '';
            this.messages = [];
          }
        }
      }
    });
  }
}
