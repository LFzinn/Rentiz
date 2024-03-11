import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Houses } from '../../../../shared/models/housesModel';
import { HousesService } from '../../../../shared/services/houses.service';
import { TitlePageComponent } from '../../../../shared/components-shared/title-page/title-page.component';
@Component({
  selector: 'app-section1-properties',
  standalone: true,
  imports: [FormsModule, TitlePageComponent],
  templateUrl: './section1-properties.component.html',
  styleUrl: './section1-properties.component.css'
})
export class Section1PropertiesComponent implements OnInit {
  houses: Houses[] = [];
  currentPage: number = 1;
  selected: { purpose: string, location: string, type: string } = { purpose: '', location: '', type: '' };
  minRooms: number = 0;
  minBath : number = 0;

  constructor(private HousesService: HousesService) { }

  ngOnInit() {
    this.loadHouses();
  }


  Search(): void {
      if (this.selected.purpose || this.selected.location || this.selected.type || this.minRooms || this.minBath) {
        this.HousesService.filterData(this.selected.purpose, this.selected.location, this.selected.type, this.minRooms, this.minBath)
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
    this.currentPage++;
    this.HousesService.nextPage();
    this.loadHouses();
  }


  previousPage(): void {
    this.currentPage--;
    this.HousesService.previousPage();
    this.loadHouses();
  }


  canGoToNextPage(): boolean {
    return this.houses.length < 12;
  }







}
