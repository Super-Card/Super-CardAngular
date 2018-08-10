import { Component, OnInit } from '@angular/core';

export interface Time {
  value: string;
}


@Component({
  selector: 'app-select-time',
  templateUrl: './select-time.component.html',
  styleUrls: ['./select-time.component.css']
})
export class SelectTimeComponent implements OnInit {

  timeOptions: Time[] = [
    { value: '18:00' },
    { value: '18:30' },
    { value: '19:00' },
    { value: '19:30' },
    { value: '20:00' },
    { value: '20:30' },
    { value: '21:00' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
