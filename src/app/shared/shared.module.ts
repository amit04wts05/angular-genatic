import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';


@NgModule({
  declarations: [
    ProductTileComponent,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
  ],
  exports :[
    ProductTileComponent,
    ProductCarouselComponent
  ]
})
export class SharedModule { }
