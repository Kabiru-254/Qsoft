import { Component } from '@angular/core';




@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  
  images = [
    {
      imageSrc: 'assets/images/tech1.jpg',
      imageAlt: 'Tech1'
    },
    // {
    //   imageSrc: 'assets/images/tech2.jpg',
    //   imageAlt: 'Tech2'
    // },
    // {
    //   imageSrc: 'assets/images/tech3.jpg',
    //   imageAlt: 'Tech3'
    // },
    // {
    //   imageSrc: 'assets/images/tech4.jpg',
    //   imageAlt: 'Tech4'
    // },
    {
      imageSrc: 'assets/images/tech5.jpg',
      imageAlt: 'Tech5'
    },
    {
      imageSrc: 'assets/images/tech6.jpg',
      imageAlt: 'Tech6'
    },
    {
      imageSrc: 'assets/images/tech7.jpg',
      imageAlt: 'Tech7'
    },
    {
      imageSrc: 'assets/images/tech8.png',
      imageAlt: 'Tech8'
    },
    {
      imageSrc: 'assets/images/tech9.jpg',
      imageAlt: 'Tech9'
    },
    {
      imageSrc: 'assets/images/tech10.jpg',
      imageAlt: 'Tech10'
    }
    
  ];
	
}
