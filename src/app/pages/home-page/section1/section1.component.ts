import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Houses } from '../../../shared/models/housesModel';
import { HouseFilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  houses: Houses[] = [];

  private HouseFilterService = inject(HouseFilterService);

  selected = {
    purpose: '',
    location: '',
    type: '',
  };

  constructor(private router: Router) {}


  search(): void {
    this.HouseFilterService.setSelectedData(
      this.selected.purpose,
      this.selected.location,
      this.selected.type,
    );
    this.router.navigate(['/properties']);
  }
}





