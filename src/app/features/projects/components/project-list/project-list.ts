import { Component, inject, OnInit } from '@angular/core';
import { ProjectFilter } from "../project-filter/project-filter";
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../../../../core/models';
import { ProjectService } from '../../../../core/services/project';
import { CrudService } from '../../../../core/services/crud.service';

@Component({
  selector: 'app-project-list',
  imports: [ProjectFilter, ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList implements OnInit {
  private projectService = inject(ProjectService);
  private crudService = inject(CrudService);
  
  allProjects: Project[] = [];
  projects: Project[] = [];

  ngOnInit() {
    this.crudService.trackAnalytics('projectViews');

    this.projectService.getProjects(1, 100).subscribe({
      next: (res) => {
        this.allProjects = res.data;
        this.projects = [...this.allProjects];
      },
      error: (err) => console.error('Error fetching projects', err)
    });
  }

  filterProjects(filter: string) {

    if (filter === 'All') {

        this.projects = [...this.allProjects];

        return;

    }

    this.projects = this.allProjects.filter(project =>
        project.technologies.includes(filter)
    );

}
}
