import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  imports: [],
  templateUrl: './introduction.html',
  styleUrl: './introduction.scss',
})
export class Introduction {
   technologies = [
    'Angular',
    'Node.js',
    'MongoDB',
    'Express',
    'AWS',
    'GraphQL',
    'TypeScript',
    'AI'
  ];

}
