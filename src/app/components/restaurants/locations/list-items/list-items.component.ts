import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../../services/restaurants.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private restaurants:Restaurants) { }

  ngOnInit() {
  }

}
