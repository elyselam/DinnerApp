import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;


  constructor() { }

  ngOnInit() {
    console.log(this.image);
  }

}
