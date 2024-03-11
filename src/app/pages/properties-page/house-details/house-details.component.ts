import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { HousesService } from '../../../shared/services/houses.service';

@Component({
  selector: 'app-house-details',
  standalone: true,
  imports: [],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css'
})


export class HouseDetailsComponent implements OnInit {
  house: any;

  constructor(private route: ActivatedRoute, private HousesService: HousesService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.HousesService.getHouseById(id).subscribe((house: any) => {
        this.house = house;
      });
    }
  }
}
