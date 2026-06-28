import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-download-button',
  imports: [],
  templateUrl: './download-button.html',
  styleUrl: './download-button.scss',
})
export class DownloadButton {

   @Input()

  url='';
}
