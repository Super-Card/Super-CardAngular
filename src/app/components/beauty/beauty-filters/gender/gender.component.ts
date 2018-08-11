import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  constructor(private beautyService: BeautyService) { }

  ngOnInit() {
  }

}
