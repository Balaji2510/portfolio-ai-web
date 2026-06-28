import { Component, Input } from '@angular/core';
import { TechnologyChip } from "../technology-chip/technology-chip";

export interface Project {

  id: number;

  title: string;

  description: string;

  image: string;

  technologies: string[];

  github: string;

  liveDemo: string;

  featured: boolean;

}

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
