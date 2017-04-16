import { Component } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { ApiService } from '../shared';
import { range, each } from 'lodash';
import {Headers} from '@angular/http';

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
          this.api.fakePost(null)
      });
  }
  bind(events) {
     let el = document.getElementsByClassName("logo");
     each(events, (event) => {
          el[0].addEventListener(event, () => { });
      });
  }
  addClasses(classes) {
     let el = document.getElementsByClassName("question-submit")[0];
     each(classes, (className) => {
          el.className += " " + className;
      });
  }
  addSantaSpeach(site) {
     let el = document.getElementsByClassName("logo")[0];
     el.innerHTML += `<p class="bad-saita-best-site">this is my best <a href="${site}"> site </a></p>`;
  }

  postWithHeaders(headersParams) {
      let headers = new Headers();
      debugger;
      each(headersParams, (param) => {
          headers.append(param.key, param.value);
      });
      this.api.fakePost(headers)
  }
}