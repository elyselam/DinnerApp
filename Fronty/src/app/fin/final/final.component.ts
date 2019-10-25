import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  @Input() rec;

  constructor() { }

  ngOnInit() {
  }

}
