import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../../services/restaurants.service';

@Component({
  selector: 'app-select-people',
  templateUrl: './select-people.component.html',
  styleUrls: ['./select-people.component.css']
})
export class SelectPeopleComponent implements OnInit {

  constructor(private restaurants:Restaurants) { }

  ngOnInit() {
  }

  handleChange(event) {
    this.restaurants.setSelectedPeople(event.target.value);
  }
}
