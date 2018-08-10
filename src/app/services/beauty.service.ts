import { Injectable } from '@angular/core';

@Injectable()
export class BeautyService {
  constructor() {}

  selectedItem = {};

  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }
}
