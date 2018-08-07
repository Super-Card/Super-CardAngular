import { Injectable } from '@angular/core';

@Injectable()
export class ClothesService {
  filters: string[] = [];
 
  add(filter: string) {
    this.filters.push(filter);
    console.log(this.filters);
  }
 
  clear() {
    this.filters = [];
  }
}
