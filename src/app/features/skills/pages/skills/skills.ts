import { Component, inject, OnInit } from '@angular/core';
import { SkillService } from '../../../../core/services/skill';
import { Skill } from '../../../../core/models';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  private skillService = inject(SkillService);
  skills: Skill[] = [];

  ngOnInit() {
    this.skillService.getSkills().subscribe({
      next: (res) => {
        this.skills = res.data;
      },
      error: (err) => console.error(err)
    });
  }
}
