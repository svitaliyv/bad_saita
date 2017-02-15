import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  constructor(private http: Http){
  }

  getQuestions(){
    
    return this.http.get('api/questons').subscribe((res:Object) => console.log(res));
  }

}



