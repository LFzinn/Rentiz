import { Component } from '@angular/core';

import { Section1HomeComponent } from './section1-home/section1-home.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Section1HomeComponent,
    Section2Component,
    Section3Component

  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
