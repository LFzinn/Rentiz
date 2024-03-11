import { Component } from '@angular/core';
import { Section1Component } from './section1/section1.component';


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    Section1Component,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export default class AboutPageComponent {

}
