import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router) {
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  startQuize() {
    this.router.navigate(['/quize']);
  }
}
