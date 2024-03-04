import { Component } from '@angular/core';

import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component

  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
