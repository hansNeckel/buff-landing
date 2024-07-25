import { Component, OnInit } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [MatCommonModule, MatCardModule, MatButton],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss',
})
export class HeadlineComponent implements OnInit {
  /* constructor() {
    const myCarouselElement = document.querySelector('#headliner-carousel');

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false,
    });
  } */
  ngOnInit(): void {
    //this.headlinerCarousel = new headlinerCarousel();
  }
  //const carousel = new bootstrap.Carousel('#myCarousel')

}
