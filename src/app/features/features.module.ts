import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MaterialModule } from '../material/material.module';
import { BoostrapModule } from '../boostrap/boostrap.module';
import { FlexLayoutModule } from "@angular/flex-layout";



import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HeroSectionComponent,
    NavbarComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,MaterialModule,BoostrapModule,FlexLayoutModule
  ]
})
export class FeaturesModule { }
