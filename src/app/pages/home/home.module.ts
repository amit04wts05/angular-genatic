import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainLayoutModule } from 'src/app/layouts/main/main.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainLayoutModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
