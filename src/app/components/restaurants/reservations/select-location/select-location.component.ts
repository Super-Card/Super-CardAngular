import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../../services/restaurants.service';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})
export class SelectLocationComponent implements OnInit {

  constructor(private restaurants:Restaurants) { }

  ngOnInit() {
  }

}
