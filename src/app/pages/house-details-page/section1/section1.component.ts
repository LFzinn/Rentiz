import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../shared/services/houses.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component implements OnInit {
  houses: any[] = [];


  constructor(private HousesService : HousesService,  private route: ActivatedRoute,) {}


  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
        const id = +idParam;
        this.HousesService.getHouseById(id).subscribe((house) => {
            this.houses.push(house);
        });
    }
  }
}
