import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { CategoryTileComponent } from './category-tile/category-tile.component';
import { NewLaunchComponent } from './new-launch/new-launch.component';
import { StudioComponent } from './studio/studio.component';


@NgModule({
  declarations: [
    ProductTileComponent,
    ProductCarouselComponent,
    CategoryTileComponent,
    NewLaunchComponent,
    StudioComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
  ],
  exports :[
    ProductTileComponent,
    ProductCarouselComponent,
    CategoryTileComponent,
    NewLaunchComponent,
    StudioComponent
  ]
})
export class SharedModule { }
