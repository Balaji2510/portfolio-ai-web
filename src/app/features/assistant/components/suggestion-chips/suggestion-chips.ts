import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-suggestion-chips',
  imports: [],
  templateUrl: './suggestion-chips.html',
  styleUrl: './suggestion-chips.scss',
})
export class SuggestionChips {

   @Output()
  selected = new EventEmitter<string>();

  suggestions = [

    'Tell me about Balaji',

    'Show your projects',

    'What technologies do you know?',

    'Download your resume',

    'Explain your experience',

    'How can I contact you?'

  ];

  choose(question: string) {

    this.selected.emit(question);

  }

}
