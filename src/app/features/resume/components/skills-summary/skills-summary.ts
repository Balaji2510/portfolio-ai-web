import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-summary',
  imports: [],
  templateUrl: './skills-summary.html',
  styleUrl: './skills-summary.scss',
})
export class SkillsSummary {
@Input()

skills:string[]=[];
}
