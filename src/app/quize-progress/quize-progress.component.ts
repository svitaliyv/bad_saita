import { Component, OnInit } from '@angular/core';

import { DataStorage } from '../shared/data.service';

@Component({
  selector: 'my-progress',
  templateUrl: './quize-progress.component.html',
  styleUrls: ['./quize-progress.component.scss']
})

export class ProgressComponent implements OnInit {
  qustions: Array<Object>

  vm: any

  gameStarted: Boolean

  constructor(private storage: DataStorage) {
    this.vm = this.storage;
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
