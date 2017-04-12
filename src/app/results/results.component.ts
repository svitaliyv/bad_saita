import { Component } from '@angular/core';
import { DataStorage } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-results',
  templateUrl: './results.template.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  points: Number

  maxPoints: Number

  grade: String

  time: String

  gradeIcon: String

  constructor(private storage: DataStorage, private router: Router) {
    if(!this.storage.gameFinished.value) {
      this.router.navigate(['/']);
      return;
    }

    this.points = this.storage.points;
    this.maxPoints = this.storage.maxPoints;
    this.time = this.storage.resultTime.stringFormat;

    let grade = calcGrage(this.points, this.maxPoints);
    this.gradeIcon = grade.icon;
    this.grade = grade.text;
  }
}

const calcGrage = (points, maxPoints) => {
  let percantage = points/maxPoints;
  if(percantage < 0.33 ) {
    return { text: "Maybe next time your result will be better", icon: ''};
  } else if(percantage < 0.66) {
    return { text: "Not bad, but also not good", icon: ''};
  }
  return { text: "Clever boy", icon: ''};
}
