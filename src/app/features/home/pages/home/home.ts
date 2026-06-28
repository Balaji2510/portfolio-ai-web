import { Component } from '@angular/core';
import { QuickLinks } from "../../components/quick-links/quick-links";
import { CallToAction } from "../../components/call-to-action/call-to-action";
import { Statistics } from "../../components/statistics/statistics";
import { Introduction } from "../../components/introduction/introduction";
import { Hero } from "../../components/hero/hero";

@Component({
  selector: 'app-home',
  imports: [QuickLinks, CallToAction, Statistics, Introduction, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
