import { Component, OnInit } from '@angular/core';
import { TechService } from '../../../services/tech.service';

@Component({
  selector: 'app-tech-result-list',
  templateUrl: './tech-result-list.component.html',
  styleUrls: ['./tech-result-list.component.css']
})
export class TechResultListComponent implements OnInit {

  constructor(private category: TechService) { }

  
  ngOnInit() {
  }

  onChange(ev) {
    
  }

  shops: Array<Object> = [
    { value: 'technomarket', viewValue: 'Technomarket' },
    { value: 'technopolis', viewValue: 'Technopolis' },
    { value: 'madia-markt', viewValue: 'Media Market' },
    { value: 'techmart', viewValue: 'TechMart' },
    { value: 'technika', viewValue: 'Technika' }
  ]
  selectedValue = '';
}
