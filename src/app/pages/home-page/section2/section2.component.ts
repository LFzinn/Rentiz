import { HousesService } from '../../../shared/services/houses.service';
import 'swiper/swiper-bundle.css';

import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { Houses } from '../../../shared/models/housesModel';



registerSwiperElements();
@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements AfterViewInit {
  houses: Houses[] = [];

  constructor(
    private router: Router,
    private HousesService: HousesService
    ) {}


  ngAfterViewInit(): void {
    this.HousesService.getHouses().subscribe(Houses => {
      this.houses = Houses;
    });
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }


    search(): void {
      this.router.navigate(['/properties']);
    }


    showHouseDetails(id: number): void {
      this.HousesService.getHouseById(id).subscribe((house) => {
      this.router.navigate(['/details', id]);
      });
    }

}
