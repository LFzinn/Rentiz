import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Houses } from '../../../shared/models/housesModel';
import { HousesService } from '../../../shared/services/houses.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit{

  houses: Houses[] = [];

  constructor(private router: Router, private HousesService: HousesService) {}

  ngOnInit() {
    this.HousesService.getHouses().subscribe(Houses => {
      this.houses = Houses;
    });
  }


  selected: { purpose: string, location: string, type: string } = { purpose: '', location: '', type: '' };

  purposeSelected(event: Event) {
    const target = event.currentTarget as HTMLSelectElement;
    this.selected.purpose = target.value;
  }

  locationSelected(event: Event) {
    const target = event.currentTarget as HTMLSelectElement;
    this.selected.location = target.value;
  }

  typeSelected(event: Event) {
    const target = event.currentTarget as HTMLSelectElement;
    this.selected.type = target.value;
  }

  search() {
    this.HousesService.filterData(this.selected.purpose, this.selected.location, this.selected.type)
            this.HousesService.setSelectedData(this.selected.purpose, this.selected.location, this.selected.type);
            this.router.navigate(['/properties']);
  }

}




