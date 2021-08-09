import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  toHome(){
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
  }

  toAboutus(){
    document.getElementById("aboutus").scrollIntoView({behavior:"smooth"});
  }

  toProducts(){
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
  }

  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }

}
