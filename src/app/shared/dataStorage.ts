import { Injectable } from '@angular/core';


@Injectable()
export class DataStorage {
  
  questions: Array<Object>

  points: Number
  
  constructor(){
     
    
   }
}

let instance: DataStorage2;

export class DataStorage2 {
  
  questions: Array<Object>

  points: Number
  
  constructor(){
    if(!instance) {
      instance = this;
    }
    this.questions = [];
    return instance;
  }

  save(data: any) {

    console.log("data", data);
    this.questions = data.questions;
  }

  answer(data: any) {
    
    console.log("answer", data);

  }
}



