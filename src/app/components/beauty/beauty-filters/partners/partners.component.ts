import { Component, OnInit } from '@angular/core';
import { BeautyService } from '../../../../services/beauty.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private beautyService: BeautyService) { }

  ngOnInit() {
  }

}
