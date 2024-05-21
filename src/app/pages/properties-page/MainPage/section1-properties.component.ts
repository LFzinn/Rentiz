import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TitlePageComponent } from '../../../shared/components-shared/title-page/title-page.component';
import { Houses } from '../../../shared/models/housesModel';
import { RealPipe } from '../../../shared/pipes/real.pipe';
import { HouseFilterService } from '../../../shared/services/filter.service';
import { HousesService } from '../../../shared/services/houses.service';
import { SkeletonLoadingComponent } from '../../../shared/skeleton/skeleton-loading/skeleton-loading.component';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
    selector: 'app-section1-properties',
    standalone: true,
    templateUrl: './section1-properties.component.html',
    styleUrl: './section1-properties.component.css',
    imports:
    [
      FormsModule, TitlePageComponent, RealPipe,
      SkeletonLoadingComponent , CommonModule,
      RouterModule
    ]
})


export class Section1PropertiesComponent implements OnInit {
  houses: Houses[] = [];
  hasHouse: boolean = true;
  loading: boolean = true;
  selected: any = {
    purpose: '',
    location: '',
    type: '',
    minRooms: 0,
    minBath: 0
  };

  private HousesService = inject(HousesService);
  private filterService = inject(HouseFilterService);

  houses$ = this.HousesService.getHouses();


  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadHouses();
    setTimeout(() => {
      this.loading = false;
    }, 1200);
  }

  getData() {
    this.houses$;
  }


  back(): void {
    this.clear()
    this.hasHouse = true;
  }

   //FILTRA ATRAVES DO INPUT DA PAGINA HOME

   loadHouses(): void {
    this.houses$ = this.filterService.getSelectedData().pipe(
      switchMap(selectedData => {
        if (selectedData.purpose || selectedData.location || selectedData.type) {
          return this.filterService.filterData(
            selectedData.purpose,
            selectedData.location,
            selectedData.type,
          ).pipe(
            tap(houses => {
              this.hasHouse = houses.length > 0;
            })
          );
        } else {
          return this.HousesService.getHouses().pipe(
            tap(houses => {
              this.hasHouse = houses.length > 0;
            })
          );
        }
      })
    );
  }

  //FILTRA ATRAVES DO INPUT DA PAGINA PROPRIEDADES

  Search(): void {
    this.houses$ = this.filterService.filterData(
      this.selected.purpose,
      this.selected.location,
      this.selected.type,
      this.selected.minRooms,
      this.selected.minBath
    ).pipe(
      tap(houses => {
        this.hasHouse = houses.length > 0;
      }),
      catchError(error => {
        console.error('Erro ao filtrar dados.', error);
        this.hasHouse = false;
        return of([]);
      })
    );
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
