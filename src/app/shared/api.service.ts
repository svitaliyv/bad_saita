import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { DataStorage2 } from './dataStorage';

@Injectable()
export class ApiService {
  storage: DataStorage2

  constructor(private http: Http){
    this.storage = new DataStorage2();
  }

  getQuestions(){
    return this.http.get('api/questions')
      .map((res:any) => res.json())
      .subscribe((res:any) => this.storage.save(res));
  }

  check(questionId: Number, answerId: Number){
    return this.http.get(`api/check?questionId=${questionId}&answerId=${answerId}`)
      .map((res:any) => res.json())
      .subscribe((res:any) => this.storage.answer(res));
  }
}



