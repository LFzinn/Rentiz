import { AfterViewInit, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swiper from 'swiper';

import { Houses } from '../../../shared/models/housesModel';
import { HousesService } from '../../../shared/services/houses.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})

export class Section2Component implements AfterViewInit {
  houses: Houses[] = [];

  private HousesService = inject(HousesService);
  houses$!: Observable<Houses[]>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.houses$ = this.HousesService.moreVisited(5);
  }



  ngAfterViewInit(): void {
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
}
