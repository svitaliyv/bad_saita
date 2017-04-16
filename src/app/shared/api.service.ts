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

  check(questionId: Number, answerIds: string){
      return this.http.get(`api/questions/check?questionId=${questionId}&answerIds=${answerIds}`)
          .map((res:any) => res.json())
          .subscribe((res:any) => this.storage.nextQuestion(res));
  }

  fakePost(headers: any){
      let params = headers ? { headers } : {};
      return this.http.post("api/fake", {}, params).subscribe(console.log);
  }
}



