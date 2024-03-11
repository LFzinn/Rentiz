import { Component } from '@angular/core';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { Section1PropertiesComponent } from './MainPage/section1-properties.component';



@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    Section1PropertiesComponent,
    HouseDetailsComponent
  ],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export default class PropertiesPageComponent {

}
