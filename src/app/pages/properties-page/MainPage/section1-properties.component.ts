import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { Houses } from '../../../shared/models/housesModel';
import { RealPipe } from '../../../shared/pipes/real.pipe';
import { HousesService } from '../../../shared/services/houses.service';
import { SkeletonLoadingComponent } from '../../../shared/skeleton/skeleton-loading/skeleton-loading.component';

@Component({
    selector: 'app-section1-properties',
    standalone: true,
    templateUrl: './section1-properties.component.html',
    styleUrl: './section1-properties.component.css',
    imports: [ FormsModule, TitlePageComponent, RealPipe, SkeletonLoadingComponent ]
})


export class Section1PropertiesComponent implements OnInit {
  houses: Houses[] = [];
  selected: { purpose: string, location: string, type: string, minRooms: number, minBath : number } = { purpose: '', location: '', type: '', minRooms : 0, minBath : 0};
  hasHouse: boolean = true;
  loading: boolean = true;

  constructor(private HousesService: HousesService, private router : Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadHouses();
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  getData() {
    this.HousesService.getHouses().subscribe(data => {
      this.houses = data;
    });
  }

  showHouseDetails(id: number): void {
    this.HousesService.getHouseById(id)
    this.router.navigate(['/details', id]);
  }

  back(): void {
    this.clear()
    this.hasHouse = true;
  }

   //FILTRA ATRAVES DO INPUT DA PAGINA HOME

   loadHouses(): void {
    const selectedData = this.HousesService.getSelectedData();
    if (selectedData.purpose || selectedData.location || selectedData.type) {
      this.HousesService.filterData(selectedData.purpose, selectedData.location, selectedData.type)
        .subscribe(filteredData => {
          if (Array.isArray(filteredData)) {
            this.houses = filteredData;
            if (filteredData.length === 0) {
              this.hasHouse = false;
            }
          } else {
            console.error('Erro ao filtrar dados.');
          }
        });
    } else {
      this.getData();
    }
  }

  //FILTRA ATRAVES DO INPUT DA PAGINA PROPRIEDADES

  Search(): void {
    if (this.selected.purpose || this.selected.location || this.selected.type || this.selected.minRooms || this.selected.minBath) {
      this.HousesService.filterData(this.selected.purpose, this.selected.location, this.selected.type, this.selected.minRooms, this.selected.minBath)
        .subscribe(filteredData => {
          if (Array.isArray(filteredData)) {
            this.houses = filteredData;
            if (filteredData.length === 0) {
              this.hasHouse = false;
            }
          } else {
            console.error('Erro ao filtrar dados.');
          }
        });
    } else {
      this.getData();
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

  clearPurpose(): void {
    this.selected.purpose = '';
  }

  clearType(): void {
    this.selected.type = '';
  }

  clearLocation(): void {
    this.selected.location = '';
  }

  clearRooms(): void {
    this.selected.minRooms = 0;
  }

  clearBath(): void {
    this.selected.minBath = 0;
  }

  backToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
