import { Component, OnInit } from '@angular/core';
import { ClothesService } from "../../../services/clothes.service";

@Component({
  selector: 'app-clothes-filter',
  templateUrl: './clothes-filter.component.html',
  styleUrls: ['./clothes-filter.component.css']
})
export class ClothesFilterComponent implements OnInit {
  constructor(public clothesService: ClothesService) { }

  ngOnInit() {
  }
}
