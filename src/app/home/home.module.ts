import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomePromotionComponent } from './home-promotion/home-promotion.component';
import { HomeCardProductComponent } from './home-card-product/home-card-product.component';




@NgModule({
  declarations: [
   
  HomeNavComponent,
   
  HomeCarouselComponent,
   


   
  HomePromotionComponent,
   


   
  HomeCardProductComponent],
  imports: [
    BrowserModule
  ],
  exports: [
    HomeNavComponent,HomeCarouselComponent,HomePromotionComponent,HomeCardProductComponent
  ]
 
})
export class HomeModule { }
