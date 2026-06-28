import { Component } from '@angular/core';
import { Statistic } from '../../../../core/models';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {

    statistics: Statistic[] = [

    {
      icon: '💼',
      title: 'Experience',
      value: '3.5+',
      description: 'Years'
    },

    {
      icon: '🚀',
      title: 'Projects',
      value: '20+',
      description: 'Completed'
    },

    {
      icon: '💻',
      title: 'Technologies',
      value: '15+',
      description: 'Worked With'
    },

    {
      icon: '🤖',
      title: 'AI Apps',
      value: '5+',
      description: 'Built'
    }

  ];

}
