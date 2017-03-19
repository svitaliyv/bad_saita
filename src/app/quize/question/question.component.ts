import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.template.html',
  styleUrls: ['./question.style.scss']
})
export class QuestionComponent implements OnInit {
  vm: any

  @Input() data: any;

  constructor() {
  }

  ngOnInit() {
  }
}
