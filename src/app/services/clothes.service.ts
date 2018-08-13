import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ClothesService {
	constructor() { }
	
	/* getResultItems() {
    let result = this.resultItems;

    if (this.filters.discounts.length > 0 && result.length > 0) {
      result = result.filter(item => this.filters.discounts.some(p => p === item.shopName));
    }
	
	if (this.filters.shopNames.length > 0 && result.length > 0) {
      result = result.filter(item => this.filters.shopNames.some(p => p === item.shopName));
    }
	
    return result;
  } */
  
  /* 
  selectedItem = {};

  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }

	
	
	
  filters: string[] = [];
 
  add(filter: string) {
    this.filters.push(filter);
    console.log(this.filters);
  }
 
  clear() {
    this.filters = [];
  }
  
  filters = { discounts: [], shopNames: [] };
  
  setFilter(type: string, filter: string, isChecked: boolean) {
    if (isChecked) {
      this.filters[type].push(filter);
    } else {
      let array = this.filters[type];
      array.splice(array.indexOf(filter), 1)
    }
  } */

  
  /* 
  filters: string[] = [];
 
  add(filter: string) {
    this.filters.push(filter);
    console.log(this.filters);
  }

  clear() {
    this.filters = [];

    
  filters = { discounts: [], shopNames: [] };
  
  setFilter(type: string, filter: string, isChecked: boolean) {
    if (isChecked) {
      this.filters[type].push(filter);
    } else {
      let array = this.filters[type];
      array.splice(array.indexOf(filter), 1)
    }
  } 
  }
   */
  public filters: string[] = [];
  
  add(filter: string) {
    this.filters.push(filter);
    console.log(this.filters);
  }

  clear(filter: string) {
    this.resultItems = [];
    console.log(this.resultItems)
  }

  resultItems = [
    {
      id: 1,
      shopImage: '../../assets/clothes/serdika.jpg',
      shopName: 'Serdika',
      discount: '10%'
    },
    {
      id: 1,
      shopImage: '../../assets/clothes/paradise.jpg',
      shopName: 'Paradise',
      discount: '15%'
    },
    {
      id: 1,
      shopImage: '../../assets/clothes/plovdiv.jpeg',
      shopName: 'Plovdiv',
      discount: '20%'
    },
    {
      id: 1,
      shopImage: '../../assets/clothes/varna.jpg',
      shopName: 'Varna',
      discount: '25%'
    },
    {
      id: 1,
      shopImage: '../../assets/clothes/burgas.jpg',
      shopName: 'Burgas',
      discount: '20%'
    },
    {
      id: 1,
      shopImage: '../../assets/clothes/zagora.jpg',
      shopName: 'Stara Zagora',
      discount: '30%'
    }
 
  ];
}

 

