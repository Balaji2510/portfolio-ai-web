import { Component, inject, OnInit } from '@angular/core';
import { Experience } from '../../../../core/models';
import { ExperienceCard } from "../experience-card/experience-card";

import { ExperienceService } from '../../../../core/services/experience';

@Component({
  selector: 'app-timeline',
  imports: [ExperienceCard],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline implements OnInit {
  private experienceService = inject(ExperienceService);
  experiences: Experience[] = [];

  ngOnInit() {
    this.experienceService.getExperiences().subscribe({
      next: (res) => {
        this.experiences = res.data.docs || res.data;
      },
      error: (err) => console.error(err)
    });
  }
}
