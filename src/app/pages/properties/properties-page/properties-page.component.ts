import { Component } from '@angular/core';
import { Section1PropertiesComponent } from './section1-properties/section1-properties.component';



@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    Section1PropertiesComponent
  ],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

}
