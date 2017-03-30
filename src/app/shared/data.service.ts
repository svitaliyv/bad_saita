import { Injectable } from '@angular/core';

import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class DataStorage {

  questions: BehaviorSubject<Object[]>

  activeQuestion: BehaviorSubject<Object>

  lastResult: Subject<any>

  index: BehaviorSubject<number> = new BehaviorSubject(0)

  points: number

  gameStarted: BehaviorSubject<Boolean>

  gameFinished: Boolean

  constructor() {
      this.questions = new BehaviorSubject([]);
      this.gameStarted = new BehaviorSubject(false);
      this.activeQuestion = new BehaviorSubject({});
      this.lastResult = new Subject();
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
    this.lastResult.next(result);
  }

  startGame() {
    this.gameStarted.next(true);
  }

  endGame() {
    this.gameFinished = true;
  }
}



