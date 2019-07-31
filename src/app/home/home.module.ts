import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeSmartphoneComponent } from './home-smartphone/home-smartphone.component';
import { HomeLaptopComponent } from './home-laptop/home-laptop.component';
import { HomePromotionComponent } from './home-promotion/home-promotion.component';




@NgModule({
  declarations: [
   
  HomeNavComponent,
   
  HomeCarouselComponent,
   
  HomeSmartphoneComponent,
   
  HomeLaptopComponent,
   
  HomePromotionComponent],
  imports: [
    BrowserModule
  ],
  exports: [
    HomeNavComponent,HomeCarouselComponent,HomeSmartphoneComponent,HomeLaptopComponent,HomePromotionComponent
  ]
 
})
export class HomeModule { }
