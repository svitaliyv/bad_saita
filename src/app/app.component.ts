import { Component } from '@angular/core';

import { ApiService } from './shared';

import '../style/app.scss';
import '../style/bootstrap/css/bootstrap.css';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: Array<Object>;

  constructor(private api: ApiService) {
    this.questions = this.api.questions;


  }
}
