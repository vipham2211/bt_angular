import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card-product',
  templateUrl: './home-card-product.component.html',
  styleUrls: ['./home-card-product.component.scss']
})
export class HomeCardProductComponent implements OnInit {

  public title:any = [
   {smartphone: 'THE BEST SMARTPHONE'},
   {laptop: 'THE BEST LAPTOP'},
  ];

 public mangDienThoai:any = [
   {img: 'sp_iphoneX.png',name: 'iPhone X', text:'Phone X features a new all-screen design. Face ID, which makes your face your password'},
   {img: 'sp_note7.png',name: 'Galaxy Note7', text:'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'},
   {img: 'sp_vivo850.png',name: 'Vivo', text:'A young global smartphone brand focusing on introducing perfect sound quality'},
   {img: 'sp_blackberry.png',name: 'Blackberry', text:'BlackBerry is a line of smartphones, tablets, and services originally designed'},
   
  ]
  public mangLaptop:any = [
    {img: 'lt_macbook.png',name: 'MACBOOK', text:'The MacBook is a brand of notebook computers manufactured by Apple Inc'},
    {img: 'lt_rog.png',name: 'ASUS ROG', text:'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices'},
    {img: 'lt_hp.png',name: 'HP OMEN', text:'A young global smartphone brand focusing on introducing perfect sound quality'},
    {img: 'lt_lenovo.png',name: 'LENOVO THINKPAD', text:'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012'},
    
   ]



  constructor() { }

  ngOnInit() {

  }

}
