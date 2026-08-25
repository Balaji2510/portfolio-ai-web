import { Component, inject, OnInit } from '@angular/core';
import { ProjectFilter } from "../project-filter/project-filter";
import { ProjectCard } from "../project-card/project-card";
import { Project } from '../../../../core/models';
import { ProjectService } from '../../../../core/services/project';
import { CrudService } from '../../../../core/services/crud.service';
import { SkeletonLoader } from '../../../../shared/components/skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-project-list',
  imports: [ProjectFilter, ProjectCard, SkeletonLoader],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss',
})
export class ProjectList implements OnInit {
  private projectService = inject(ProjectService);
  private crudService = inject(CrudService);
  
  allProjects: Project[] = [];
  projects: Project[] = [];
  isLoading = true;

  ngOnInit() {
    this.crudService.trackAnalytics('projectViews');

    this.projectService.getProjects(1, 100).subscribe({
      next: (res) => {
        this.allProjects = res.data;
        this.projects = [...this.allProjects];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching projects', err);
        this.isLoading = false;
      }
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
