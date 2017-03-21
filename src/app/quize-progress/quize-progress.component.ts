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

  currentIndex: any

  gameStarted: Boolean

  constructor(private storage: DataStorage) {

    Object.defineProperty(this.storage, 'index', {
      set: (index) => {
        this.results[this.currentIndex].status = 'unknown';
        this.currentIndex = index;
        this.results[index].status = 'active';
      }
    });

    Object.defineProperty(this.storage, 'questions', {
      set: (questions) => { 
        this.results = questions.map(() => { 
          return new Result("unknown");
        });
        this.currentIndex = 0;
        this.results[0].status = 'active';
      }
    });

    Object.defineProperty(this.storage, 'gameStarted', {
      set: (gameStarted) => { 
        this.gameStarted = gameStarted;
      }
    });
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
