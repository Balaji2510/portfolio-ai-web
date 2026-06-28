import { Component, Input } from '@angular/core';
import { About } from '../../../../core/models';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
@Input({ required: true })

  profile!: About;

}
