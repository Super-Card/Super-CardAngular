import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../../services/restaurants.service';

@Component({
  selector: 'app-complete-reservation',
  templateUrl: './complete-reservation.component.html',
  styleUrls: ['./complete-reservation.component.css']
})
export class CompleteReservationComponent implements OnInit {

  constructor(private restaurants:Restaurants) { }

  ngOnInit() {
  }

}
