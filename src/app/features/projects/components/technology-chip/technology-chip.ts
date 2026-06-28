import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-chip',
  imports: [],
  templateUrl: './technology-chip.html',
  styleUrl: './technology-chip.scss',
})
export class TechnologyChip {
    @Input({ required: true })
  label!: string;

}
