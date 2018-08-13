import { Component, OnInit } from '@angular/core';
import { ClothesService } from "../../../services/clothes.service";


@Component({
  selector: 'app-clothes-shops',
  templateUrl: './clothes-shops.component.html',
  styleUrls: ['./clothes-shops.component.css']
})
export class ClothesShopsComponent implements OnInit {

  constructor(public clothesService: ClothesService) { }

  ngOnInit() {
  }

  onChange() {
    console.log(this.clothesService.filters);
  }
}
