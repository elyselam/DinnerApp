import { CuisineServiceService } from '../services/cuisine-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  preferencesForm: FormGroup;
  registerForm: FormGroup;
  likedCuisines: any;
  cuisines: any;

  address: string;
  constructor(private cuisineServiceService: CuisineServiceService) { }

  ngOnInit() {
    //set the cuisines on this component equal to the cuisineService cuisines.
    this.cuisines = this.cuisineServiceService.cuisines;
    //set the likedCuisines array of this component to the likedCuisines of the cuisineService
    this.likedCuisines = this.cuisineServiceService.likedCuisines;

    //form group with one form control for address.
    this.registerForm = new FormGroup({
      'address': new FormControl(null, Validators.required),
    })
    }

  // runs when registerForm is submitted.
  logRegisterValues(){
    this.address = this.registerForm.value.address
    this.registerForm.reset();
  }

  submitPreferences(){
    alert(`Preferences are: ${this.cuisineServiceService.likedCuisines}`)
  }
  }


