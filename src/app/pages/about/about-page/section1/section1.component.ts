import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../../shared/components-shared/title-page/title-page.component';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

}
