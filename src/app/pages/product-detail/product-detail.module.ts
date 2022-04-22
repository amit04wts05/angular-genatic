import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    SharedModule,
    ProductDetailRoutingModule
  ],
  exports:[SharedModule]
})
export class ProductDetailModule { }
