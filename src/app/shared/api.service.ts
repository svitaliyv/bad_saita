import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataStorage } from './data.service';

@Injectable()
export class ApiService {
  constructor(private http: Http, private storage: DataStorage){
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



