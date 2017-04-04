import { Component } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { ApiService } from '../shared';
import { range, each } from 'lodash';

@Component({
  selector: 'elf',
  template: ''
})
export class ElfComponent{
  constructor(private storage: DataStorage, private api: ApiService) {
    this.storage.activeQuestion.subscribe(question => {
        if(question.action && this[question.action]) {
            this[question.action].call(this, question.actionParams);
        }
    });
  }
  say(words) {
      console.log(words.join(" "));
  }
  post(times) {
      each(range(0, times), () => {
          this.api.fakePost()
      });
  }
}
