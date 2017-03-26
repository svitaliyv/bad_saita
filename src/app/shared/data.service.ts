import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataStorage {

  questions: Object[]

  activeQuestion: Object

  index: number

  index2: BehaviorSubject<number> = new BehaviorSubject(0)

  points: number 

  gameStarted: Boolean

  gameFinished: Boolean

  constructor() {
      this.questions = [];
      this.points = 0;
      this.index = 0;

      this.index2.subscribe(
          value => console.log(value),
          error => console.log(error)
      );

      console.log(this.index2.value);

      this.index2.next(1)

      console.log(this.index2.value);

      this.index2.next(2)

      console.log(this.index2.value);

      console.log(this.index2);
  }

  save(data: any) {
    this.questions = data.questions;
    this.activeQuestion = data.questions[0];
  }

  nextQuestion(response: any) {
    let result = response.result;
    this.index++;
    this.points = this.points + result.points;
    this.activeQuestion = this.questions[this.index];
  }

  startGame() {
    this.gameStarted = true;
  }

  endGame() {
    this.gameFinished = true;
  }
}



