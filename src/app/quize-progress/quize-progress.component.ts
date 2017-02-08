import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-progress',
  templateUrl: './quize-progress.component.html',
  styleUrls: ['./quize-progress.component.scss']
})

export class ProgressComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('ProgressComponent');
  }

}
