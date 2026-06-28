import { Component, Input } from '@angular/core';
import { Experience } from '../../../../core/models/experience.model';

@Component({
  selector: 'app-experience-summary',
  imports: [],
  templateUrl: './experience-summary.html',
  styleUrl: './experience-summary.scss',
})
export class ExperienceSummary {

    @Input()

  experience:Experience[]=[];

}
