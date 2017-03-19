import { Component, OnInit } from '@angular/core';

import { DataStorage } from '../../shared/data.service';

@Component({
  selector: 'quize-info',
  templateUrl: './quize-info.template.html',
  styleUrls: ['./quize-info.style.scss']
})
export class QuizeInfoComponent implements OnInit {
  vm: any

  constructor(private storage: DataStorage) {
    this.vm = this.storage;
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }
}
