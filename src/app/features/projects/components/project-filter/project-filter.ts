import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-project-filter',
  imports: [],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.scss',
})
export class ProjectFilter {
  @Output()
  filterChanged = new EventEmitter<string>();

  readonly filters = [
    'All',
    'Angular',
    'Node.js',
    'MongoDB',
    'AWS',
    'GraphQL',
    'AI'
  ];

  selected = signal('All');

  select(filter: string) {

    this.selected.set(filter);

    this.filterChanged.emit(filter);

  }

}
