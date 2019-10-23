import { Component, OnInit, Input } from '@angular/core';
import { CuisineServiceService } from '../services/cuisine-service.service';

@Component({
  selector: 'app-clickable-cuisine',
  templateUrl: './clickable-cuisine.component.html',
  styleUrls: ['./clickable-cuisine.component.css']
})
export class ClickableCuisineComponent implements OnInit {
  // the cuisine will be inputted from a parent component
 @Input() cuisine : string ;
 @Input() clicked: boolean;

 //inject the cuisine service for access to the data it holds
  constructor(private cuisineServiceService: CuisineServiceService) { }

  ngOnInit() {
  }

  addToArray(){
    // if the clicked cuisine is not already in likedCuisines, 
    if(this.cuisineServiceService.likedCuisines.indexOf(this.cuisine)===-1){

      //add the clicked cuisine to the 'likedCuisines' array in the service.
      this.cuisineServiceService.likedCuisines.push(this.cuisine);
      //log the array as it grows
      console.log(this.cuisineServiceService.likedCuisines);
      //set clicked to true to hide the clicked cuisine
      this.clicked = true;
    }
    else {
      //the cuisine has already been added to likedCuisines on the service and should not be added again
      alert("Already liked.")
    }

  }
}
