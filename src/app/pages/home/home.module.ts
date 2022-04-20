import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MainLayoutModule } from "src/app/layouts/main/main.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MainLayoutModule, HomeRoutingModule, SharedModule],
  exports: [SharedModule],
})
export class HomeModule {}
