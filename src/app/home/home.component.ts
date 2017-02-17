import { Component, OnInit } from '@angular/core';

import { ApiService, DataStorage } from '../shared';

import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private api: ApiService,
    private dataStorage: DataStorage,
    private router: Router) {
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  startQuize() {
    var questions = this.api.getQuestions();
    this.dataStorage.fetch(questions);

    this.router.navigate(['/quize']);
    
  }
}
