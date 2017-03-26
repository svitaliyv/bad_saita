import { Component, OnInit } from '@angular/core';

import { DataStorage } from '../shared/data.service';

class Result {  
    status: string;
    constructor(status: string) {
        this.status = status;
    }
}

@Component({
  selector: 'my-progress',
  templateUrl: './quize-progress.component.html',
  styleUrls: ['./quize-progress.component.scss']
})
export class ProgressComponent implements OnInit {
  results: Result[]

  questions: Object[]

  currentIndex: any

  gameStarted: Boolean

  constructor(private storage: DataStorage) {
    this.currentIndex = this.storage.index;

    Object.defineProperty(this.storage, 'index', {
      set: (value) => {
        this.results[this.currentIndex].status = 'unknown';
        this.currentIndex = value;
        this.results[value].status = 'active';
      },
      get: () => {
        return this.currentIndex;
      }
    });

    this.questions = this.storage.questions;

    Object.defineProperty(this.storage, 'questions', {
      set: (value) => {
        this.results = value.map(() => { 
          return new Result("unknown");
        });
        this.questions = value;
        this.currentIndex = 0;
        this.results[0].status = 'active';
      },
      get: () => {
        return this.questions;
      }
    });

    this.gameStarted = this.storage.gameStarted;

    Object.defineProperty(this.storage, 'gameStarted', {
      set: (gameStarted) => { 
        this.gameStarted = gameStarted;
      },
      get: () => {
        return this.gameStarted;
      }
    });
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
