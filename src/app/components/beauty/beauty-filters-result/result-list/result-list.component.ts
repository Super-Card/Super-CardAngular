import { Component, OnInit, Inject } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit  {

  constructor(@Inject(DOCUMENT) private document: any, private beautyService: BeautyService) { }

  ngOnInit() {
    this.beautyService.filters = { discounts: [], partners: [], gender: [], categories: [] };
  }

  closeTag(filter) {
    document.getElementById(filter).click();
  }

}