import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/']);
  }

}
