import { Component, OnInit } from '@angular/core';
import { DataStorage } from '../shared/data.service';

@Component({
  selector: 'my-results',
  templateUrl: './results.template.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  constructor(private storage: DataStorage) {

  }

  ngOnInit() {
    this.storage.endGame();
  }
}
