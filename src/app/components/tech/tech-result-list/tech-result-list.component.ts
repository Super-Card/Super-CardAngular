import { Component, OnInit } from '@angular/core';
import { TechService } from '../../../services/tech.service';

@Component({
  selector: 'app-tech-result-list',
  templateUrl: './tech-result-list.component.html',
  styleUrls: ['./tech-result-list.component.css']
})
export class TechResultListComponent implements OnInit {

  constructor(private category: TechService) { }

  ngOnChanges() {
    console.log(this.selectedValue);
  }

  ngOnInit() {
  }

  onChange(ev) {
    console.log(this.selectedValue);
    this.selectedValue = ev.target.value;
    console.log(this.selectedValue);
  }

  shops: Array<Object> = [
    { value: 'technomarket', viewValue: 'Technomarket' },
    { value: 'technopolis', viewValue: 'Technopolis' },
    { value: 'madia-markt', viewValue: 'Media Market' },
    { value: 'inter-techno', viewValue: 'InterTecno' },
    { value: 'electronica', viewValue: 'Electronica' }
  ]
  selectedValue = '';
}
