import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  openModal = false;

  getModalStatus() {
    return this.openModal;
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }
}