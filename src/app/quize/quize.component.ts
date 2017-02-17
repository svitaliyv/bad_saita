import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../shared/data.service';

@Component({
  selector: 'my-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.scss']
})
export class QuizeComponent implements OnInit {
  constructor(private storage: DataStorage) {
  }

  ngOnInit() {
    this.storage.startGame();
  }
}
