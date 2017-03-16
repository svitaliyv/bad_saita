import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { ApiService } from '../shared';

@Component({
  selector: 'my-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  constructor(private storage: DataStorage, private api: ApiService,) {
  }

  ngOnInit() {
    this.storage.startGame();
    this.api.getQuestions();
  }
}
