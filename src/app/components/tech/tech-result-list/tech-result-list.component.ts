import { Component, OnInit } from '@angular/core';
import {TechService} from '../../../services/tech.service';

@Component({
  selector: 'app-tech-result-list',
  templateUrl: './tech-result-list.component.html',
  styleUrls: ['./tech-result-list.component.css']
})
export class TechResultListComponent implements OnInit {

  constructor(private category :TechService) { }

  ngOnInit() {
  }
    shops: Array<Object> = [
      {value:'selected',viewValue:'Make your choise'},
      {value:'technomarket',viewValue:'Technomarket'},
      {value:'technopolis',viewValue:'Technopolis'},
      {value:'madia-markt',viewValue:'Media Market'},
      {value:'inter-techno',viewValue:'InterTecno'},
      {value:'electronica',viewValue:'Electronica'},
    ]
    selectedValue = this.shops[0];
}
