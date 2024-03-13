import { Component } from '@angular/core';
import { Section1Component } from './section1/section1.component';

@Component({
  selector: 'app-house-details-page',
  standalone: true,
  imports: [Section1Component],
  templateUrl: './house-details-page.component.html',
  styleUrl: './house-details-page.component.css'
})
export default class HouseDetailsPageComponent {

}
