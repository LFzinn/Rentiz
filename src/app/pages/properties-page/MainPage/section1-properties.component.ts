import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Houses } from '../../../shared/models/housesModel';
import { HousesService } from '../../../shared/services/houses.service';
import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-section1-properties',
    standalone: true,
    templateUrl: './section1-properties.component.html',
    styleUrl: './section1-properties.component.css',
    imports: [ FormsModule, TitlePageComponent ]
})


export class Section1PropertiesComponent implements OnInit {
  houses: Houses[] = [];
  currentPage: number = 1;
  selected: {
    purpose: string, location: string, type: string, minRooms: number, minBath : number
  } = { purpose: '', location: '', type: '', minRooms : 0, minBath : 0};

  constructor(private HousesService: HousesService, private router : Router) { }

  ngOnInit() {
    this.loadHouses();
  }


  Search(): void {
      if (this.selected.purpose || this.selected.location || this.selected.type || this.selected.minRooms || this.selected.minBath) {
        this.HousesService.filterData(this.selected.purpose, this.selected.location, this.selected.type, this.selected.minRooms, this.selected.minBath)
              .subscribe(filteredData => {
                  this.houses = filteredData;
              });
      } else {
          this.HousesService.getHouses()
              .subscribe(data => {
                  this.houses = data;
              });
      }
  }

  loadHouses(): void {
    const selectedData = this.HousesService.getSelectedData();
    if (selectedData.purpose || selectedData.location || selectedData.type) {
        this.HousesService.filterData(selectedData.purpose, selectedData.location, selectedData.type)
            .subscribe(filteredData => {
                this.houses = filteredData;
            });
    } else {
        this.HousesService.getHouses()
            .subscribe(data => {
                this.houses = data;
            });
    }
}

  nextPage(): void {
    if(this.houses.length == 12) {
      this.currentPage++;
      this.loadHouses();
      this.HousesService.nextPage();
    }
  }

  previousPage(): void {
    if(this.currentPage != 1 ) {
      this.currentPage--;
      this.loadHouses();
      this.HousesService.previousPage();
    }
  }

  clear(): void {
    this.selected.purpose = '';
    this.selected.location = '';
    this.selected.type = '';
    this.selected.minRooms = 0;
    this.selected.minBath = 0;
    this.Search();
  }

  showHouseDetails(id: number): void {
    this.HousesService.getHouseById(id).subscribe((house) => {
    this.router.navigate(['/details', id]);
    });
  }

}
