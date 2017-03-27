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
    this.storage.questions.subscribe(questions => {
        this.results = questions.map(() => new Result('unknown'));
    });

    this.storage.index.subscribe(value => {
        let prevResult = this.results[this.currentIndex];
        this.currentIndex = value;
        let currentResult = this.results[this.currentIndex];
        if (currentResult) {
          currentResult.status = 'active';
        }
        if (prevResult) {
          prevResult.status = 'unknown';
        }
    });

    this.storage.gameStarted.subscribe(value => {
        this.gameStarted = value;
    });
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
