import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css']
})
export class RequestModalComponent implements OnInit {

  constructor(public home:HomeService) { }

  ngOnInit() {
  }

  closeModal() {
    this.home.toggleModal();
  }

}
