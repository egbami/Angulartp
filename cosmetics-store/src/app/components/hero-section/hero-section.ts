import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css']
})
export class HeroSectionComponent implements AfterViewInit {

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
}


