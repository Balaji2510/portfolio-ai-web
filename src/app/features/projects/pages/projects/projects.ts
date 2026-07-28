import { Component } from '@angular/core';

import { ProjectList } from '../../components/project-list/project-list';

@Component({
  selector: 'app-projects',
  imports: [ProjectList],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

}
