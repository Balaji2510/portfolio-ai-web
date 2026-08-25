import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat as ChatModel, Message } from '../models';

@Injectable({
  providedIn: 'root',
})
export class Chat {
  private apiUrl = `${environment.apiUrl}/chat`;

  constructor(private http: HttpClient) {}

  createChat(title?: string): Observable<{ success: boolean; data: ChatModel }> {
    return this.http.post<{ success: boolean; data: ChatModel }>(this.apiUrl, { title });
  }

  getUserChats(page = 1, limit = 20): Observable<{ success: boolean; data: ChatModel[] }> {
    return this.http.get<{ success: boolean; data: ChatModel[] }>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getChatById(id: string): Observable<{ success: boolean; data: ChatModel & { messages: Message[] } }> {
    return this.http.get<{ success: boolean; data: ChatModel & { messages: Message[] } }>(`${this.apiUrl}/${id}`);
  }

  sendMessage(chatId: string, message: string): Observable<{ success: boolean; data: { userMessage: Message; assistantMessage: Message } }> {
    return this.http.post<{ success: boolean; data: { userMessage: Message; assistantMessage: Message } }>(`${this.apiUrl}/${chatId}/message`, { message });
  }

  deleteChat(id: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`);
  }

  updateChatTitle(id: string, title: string): Observable<{ success: boolean; data: ChatModel }> {
    return this.http.put<{ success: boolean; data: ChatModel }>(`${this.apiUrl}/${id}/title`, { title });
  }
}
