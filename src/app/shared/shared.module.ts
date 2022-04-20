import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';


@NgModule({
  declarations: [
    ProductTileComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
  ],
  exports :[
    ProductTileComponent
  ]
})
export class SharedModule { }
