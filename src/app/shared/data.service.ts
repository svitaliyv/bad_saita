import { Injectable } from '@angular/core';

@Injectable()
export class DataStorage {

  questions: Array<Object>

  points: Number

  gameStarted: Boolean

  gameFinished: Boolean
  
  constructor() {
      this.questions = [];
      this.points = 0;
   }

   save(data: any) {
    this.questions = data.questions;
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



