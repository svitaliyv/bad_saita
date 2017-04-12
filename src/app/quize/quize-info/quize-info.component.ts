import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DataStorage } from '../../shared/data.service';

@Component({
  selector: 'quize-info',
  templateUrl: './quize-info.template.html',
  styleUrls: ['./quize-info.style.scss']
})
export class QuizeInfoComponent implements OnInit {
  points: number = 0
  time: string = ''
  seconds: number = 0

  constructor(private storage: DataStorage) {
  }

  ngOnInit() {
    this.storage.lastResult.subscribe(result => {
        this.points += result.points;
    });

    let timer = Observable.timer(1000,1000);
    timer.subscribe(() => {
        this.seconds++;
        let mins = Math.floor(this.seconds / 60);
        let secs = this.seconds % 60;
        this.time = `${(mins ? mins + ' min ' : '')}${secs} sec`;
    });

    this.storage.gameFinished.subscribe(result => {
        if(result) {
          this.storage.resultTime = { stringFormat: this.time, seconds: this.seconds };
        }
    });

  }
}