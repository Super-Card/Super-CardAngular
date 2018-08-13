import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor(private popup:Popup) { }
  ClickButton(){
this.popup.options = {
  widthProsentage: 15,
  showButtons: false,
  header: "Sign up for our Newsletter!",
}
this.popup.show(this.popup.options);
  }
  ngOnInit() {
  }

}
