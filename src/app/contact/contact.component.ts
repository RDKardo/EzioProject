import { Component, OnInit } from '@angular/core';
import { faPhoneSquareAlt, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  latitude:number = 20.703826;
  longitude:number = -103.331875;
  zoom: number = 15  ;
  txtInfoWindow: string;
  faPhoneSquareAlt= faPhoneSquareAlt;
  faAt=faAt;
  faMapMarkerAlt=faMapMarkerAlt;

  constructor() { 
    this.txtInfoWindow = "Calle Montes Celestes 1712,Col. Independencia, Guadalajara Jalisco MEX"
  }

  ngOnInit(): void {
  }

}
