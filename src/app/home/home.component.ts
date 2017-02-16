import { Component, OnInit } from '@angular/core';

import { ApiService, DataStorage } from '../shared';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, private dataStorage: DataStorage) {
      console.log(this.api.getQuestions());
      console.log(this.dataStorage.points);
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  startQuize() {
    debugger;
  }

}
