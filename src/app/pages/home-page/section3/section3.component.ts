import 'swiper/swiper-bundle.css';

import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { register as registerSwiperElements } from 'swiper/element/bundle';



registerSwiperElements();

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component implements AfterViewInit {

  constructor() {}


  ngAfterViewInit(): void {
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }




}
