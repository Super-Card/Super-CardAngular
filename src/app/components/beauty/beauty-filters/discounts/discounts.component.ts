import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor(private beautyService: BeautyService) { }

  ngOnInit() {
  }
}
