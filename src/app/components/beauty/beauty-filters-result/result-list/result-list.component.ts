import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private beautyService: BeautyService) { }

  ngOnInit() {
  }

}