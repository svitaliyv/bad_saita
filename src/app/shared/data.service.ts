import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {

  questions: Array<Object>

  activeQuestion: Object

  index = 0

  points: Number

  gameStarted: Boolean

  gameFinished: Boolean
  
  constructor() {
      this.questions = [];
      this.points = 0;
   }

   save(data: any) {
    this.questions = data.questions;
    this.activeQuestion = data.questions[this.index];
  }

  answer(data: any) {
    console.log("answer", data);
  }

  startGame() {
    this.gameStarted = true;
  }

  endGame() {
    this.gameFinished = true;
  }
}



