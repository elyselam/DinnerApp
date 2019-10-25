import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  address: string;
  price: string;
  radius: string;
   

  constructor() { }

  ngOnInit() {
  }
   onSubmit(){
    let addressObj = {
      address: this.address,
      price: this.price,
      radius: this.radius
    }

    console.log(addressObj);

}
}
