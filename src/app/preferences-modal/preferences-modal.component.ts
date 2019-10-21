import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-modal',
  templateUrl: './preferences-modal.component.html',
  styleUrls: ['./preferences-modal.component.css']
})
export class PreferencesModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Modal form")
  }

}




