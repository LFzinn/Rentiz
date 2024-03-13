import { Component } from '@angular/core';
import { Section1PropertiesComponent } from './MainPage/section1-properties.component';



@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    Section1PropertiesComponent,
  ],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export default class PropertiesPageComponent {

}
