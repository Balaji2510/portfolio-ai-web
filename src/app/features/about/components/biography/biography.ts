import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biography',
  imports: [],
  templateUrl: './biography.html',
  styleUrl: './biography.scss',
})
export class Biography {

  @Input()

  summary = '';
}
