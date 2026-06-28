import { Component } from '@angular/core';
import { Interests } from "../../components/interests/interests";
import { Achievements } from "../../components/achievements/achievements";
import { Education } from "../../components/education/education";
import { Biography } from "../../components/biography/biography";
import { ProfileCard } from "../../components/profile-card/profile-card";

@Component({
  selector: 'app-about',
  imports: [Interests, Achievements, Education, Biography, ProfileCard],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
profile={

name:'Balaji',

designation:'MEAN Stack Developer',

summary:'Passionate Full Stack Developer with 3.5 years of experience building enterprise web applications using Angular, Node.js, MongoDB, AWS, GraphQL and AI technologies.',

location:'Chennai, India',

email:'balaji@example.com',

phone:'+91 XXXXX XXXXX',

profileImage:'assets/images/Balaji_Photo.jpg',

yearsOfExperience:3.5

};
}
