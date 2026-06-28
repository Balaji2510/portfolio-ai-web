import { Component } from '@angular/core';
import { ExperienceSummary } from "../../components/experience-summary/experience-summary";
import { SkillsSummary } from "../../components/skills-summary/skills-summary";
import { DownloadButton } from "../../components/download-button/download-button";
import { ResumeHeader } from "../../components/resume-header/resume-header";

@Component({
  selector: 'app-resume',
  imports: [ExperienceSummary, SkillsSummary, DownloadButton, ResumeHeader],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

  esume={

name:'Balaji',

designation:'MEAN Stack Developer',

summary:'3.5 years of experience in Angular, Node.js, MongoDB, AWS and AI.',

resumeUrl:'assets/resume/Balaji_Resume.pdf'

};

skills=[

'Angular',

'Node.js',

'MongoDB',

'AWS',

'GraphQL',

'TypeScript',

'Express',

'AI'

];

experience=[];
resume: any;

}
