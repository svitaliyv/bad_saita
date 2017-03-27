import { Injectable } from '@angular/core';

import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataStorage {

  questions: BehaviorSubject<Object[]>

  activeQuestion: BehaviorSubject<Object>

  index: BehaviorSubject<number> = new BehaviorSubject(0)

  points: number

  gameStarted: BehaviorSubject<Boolean>

  gameFinished: Boolean

  constructor() {
      this.questions = new BehaviorSubject([]);
      this.gameStarted = new BehaviorSubject(false);
      this.activeQuestion = new BehaviorSubject({});
      this.points = 0;
  }

  save(data: any) {
    this.questions.next(data.questions);
    this.activeQuestion.next(data.questions[0]);
  }

  nextQuestion(response: any) {
    if(!response.success) {
        return;
    }

    let result = response.result;
    this.points = this.points + result.points;

    this.index.next(this.index.value + 1);
    this.activeQuestion.next(this.questions.value[this.index.value]);
  }

  startGame() {
    this.gameStarted.next(true);
  }

  endGame() {
    this.gameFinished = true;
  }
}



