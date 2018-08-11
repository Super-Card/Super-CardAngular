import { Component, OnInit } from '@angular/core';

export class User {
 
    name: string;
    email: string;
    terms: boolean;
 
    constructor(values: Object = {}) {
      //Constructor initialization
      Object.assign(this, values);
  }
 
}