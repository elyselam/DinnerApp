import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuisineServiceService {

  cuisines = ['Chinese', 'American', 'Japanese'];
  likedCuisines = new Array<any>(); 
  }
