import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { User } from '../User';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  constructor(public home:HomeService) { }
  private user:User;

  ngOnInit() {
    this.user = new User({
      name:"",
      email:"",
      terms: false});
  }
  
}
