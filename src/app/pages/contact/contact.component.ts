import { Component } from '@angular/core';
import { Section1Component } from './section1/section1.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Section1Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
