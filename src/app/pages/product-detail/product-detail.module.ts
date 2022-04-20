import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
