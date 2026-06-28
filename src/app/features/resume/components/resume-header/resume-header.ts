import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  imports: [],
  templateUrl: './resume-header.html',
  styleUrl: './resume-header.scss',
})
export class ResumeHeader {

  @Input() name = '';

  @Input() designation = '';

  @Input() summary = '';

}
