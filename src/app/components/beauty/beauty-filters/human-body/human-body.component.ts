import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent implements OnInit {

  human = {};

  constructor(private beautyService: BeautyService) {
    this.human = { hair: false, body: false, face: false };
   }

  select(type: string, filter: string) {
    this.human[filter] = !this.human[filter];
    this.beautyService.setFilter(type, filter, this.human[filter]);
  }

  ngOnInit() {
  }

}
