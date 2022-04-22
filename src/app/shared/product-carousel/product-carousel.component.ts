import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  @Input() banner:any;
  constructor() { }

  ngOnInit(): void {
  }

}
