import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-check',
  templateUrl: './card-check.component.html',
  styleUrls: ['./card-check.component.css']
})
export class CardCheckComponent implements OnInit {

  constructor() { }
  public show:boolean = false;

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }
}
