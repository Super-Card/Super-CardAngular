import { Component, OnInit } from '@angular/core';
import {TechService} from '../../../../services/tech.service';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {

  constructor(private categories:TechService) { }

  ngOnInit() {
  }

}
