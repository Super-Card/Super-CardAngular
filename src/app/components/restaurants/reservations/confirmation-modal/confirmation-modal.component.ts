import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../../../../services/restaurants.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  constructor(private restaurants:Restaurants) { }

  ngOnInit() {
  }

  reservationNumber = Math.floor(Math.random() * 1000) + 5000;

  closeModal() {
    this.restaurants.toggleModal();
    this.restaurants.resetReservation();
  }

}
