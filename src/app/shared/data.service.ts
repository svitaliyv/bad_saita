import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {

  questions: Object[]

  activeQuestion: Object

  index: Number

  points: Number

  gameStarted: Boolean

  gameFinished: Boolean
  
  constructor() {
      this.questions = [];
      this.points = 0;
      this.index = 0;
   }

   save(data: any) {
    this.questions = data.questions;
    this.activeQuestion = data.questions[0];
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



