import { Component, OnInit } from '@angular/core';
import { ClothesService } from "../../../services/clothes.service";


@Component({
  selector: 'app-clothes-shops',
  templateUrl: './clothes-shops.component.html',
  styleUrls: ['./clothes-shops.component.css'],
  providers: [
    ClothesService
  ]
})
export class ClothesShopsComponent implements OnInit {

  constructor(public clothesService: ClothesService) { }

  ngOnInit() {
  }

}
