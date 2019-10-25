import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  @Input() rec;
  @Input() rname;
  toggley = false;

  constructor() { }

  ngOnInit() {
    this.rec = ["lol", "kek"];
    this.rname = ["buttsex", "for sale"]
  }

  toggle() {
    this.toggley = !this.toggley;
  }
}
