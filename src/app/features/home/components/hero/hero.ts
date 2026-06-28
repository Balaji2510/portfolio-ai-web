import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

   readonly stats = [
    {
      value: '3.5+',
      label: 'Years Experience'
    },
    {
      value: '20+',
      label: 'Projects'
    },
    {
      value: '10+',
      label: 'Technologies'
    },
    {
      value: '100%',
      label: 'Passion'
    }
  ];

}
