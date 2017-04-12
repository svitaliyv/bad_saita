import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subject} from 'rxjs/Subject';
import { reduce } from 'lodash';

class Question{
    points: number
    variants: any
    type: any
    id: any
    text: any
    constructor(data){
      this.points = data.points;
      this.variants = data.variants;
      this.type = data.type;
      this.text = data.text;
      this.id = data.id;
    }
}

@Injectable()
export class DataStorage {

  questions: BehaviorSubject<Question[]>

  activeQuestion: BehaviorSubject<any>

  lastResult: Subject<any>

  index: BehaviorSubject<number> = new BehaviorSubject(0)

  points: number

  maxPoints: number

  resultTime: any

  gameStarted: BehaviorSubject<Boolean>

  gameFinished: BehaviorSubject<Boolean>

  constructor(private router: Router) {
      this.questions = new BehaviorSubject([]);
      this.gameStarted = new BehaviorSubject(false);
      this.gameFinished = new BehaviorSubject(false);
      this.activeQuestion = new BehaviorSubject({});
      this.lastResult = new Subject();
      this.points = 0;
  }

  save(data: any) {
    this.questions.next(data.questions.map(x => new Question(x)));
    this.maxPoints = reduce(this.questions.value, (memo, item) => memo + item.points, 0);
    this.activeQuestion.next(this.questions.value[0]);
  }

  nextQuestion(response: any) {
    if(!response.success) {
        return;
    }

    let result = response.result;
    this.points = this.points + result.points;
    result.index = this.index.value;

    this.index.next(this.index.value + 1);
    this.lastResult.next(result);

    if (!this.questions.value[this.index.value]) {
      this.endGame();
    } else {
      this.activeQuestion.next(this.questions.value[this.index.value]);
    }
  }

  startGame() {
    this.gameStarted.next(true);
  }

  endGame() {
    this.gameFinished.next(true);
    this.router.navigate(['/results']);
  }
}



