import { Component, OnInit } from '@angular/core';

import { DataStorage2 } from '../shared/dataStorage';

@Component({
  selector: 'my-progress',
  templateUrl: './quize-progress.component.html',
  styleUrls: ['./quize-progress.component.scss']
})

export class ProgressComponent implements OnInit {
  storage: DataStorage2

  qustions: Array<Object>

  constructor() {
    // Do stuff

    debugger;

    this.storage = new DataStorage2();

    this.qustions = this.storage.questions;
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
