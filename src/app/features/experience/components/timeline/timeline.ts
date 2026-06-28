import { Component } from '@angular/core';
import { Experience } from '../../../../core/models';
import { ExperienceCard } from "../experience-card/experience-card";

@Component({
  selector: 'app-timeline',
  imports: [ExperienceCard],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
})
export class Timeline {
 experiences: Experience[] = [

    {

      id:1,

      company:'ABC Technologies',

      designation:'Software Engineer',

      duration:'2022 - Present',

      location:'Chennai',

      employmentType:'Full Time',

      current:true,

      technologies:[
        'Angular',
        'Node.js',
        'AWS',
        'MongoDB'
      ],

      responsibilities:[

        'Develop enterprise web applications',

        'Designed REST APIs',

        'Integrated AWS services',

        'Led frontend development'

      ]

    }

  ];
}
