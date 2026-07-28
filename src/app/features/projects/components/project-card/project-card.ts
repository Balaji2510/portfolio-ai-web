import { Component, Input } from '@angular/core';
import { TechnologyChip } from "../technology-chip/technology-chip";
import { Project } from '../../../../core/models';
@Component({
  selector: 'app-project-card',
  imports: [TechnologyChip],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  @Input({ required: true })
  project!: Project;

}
