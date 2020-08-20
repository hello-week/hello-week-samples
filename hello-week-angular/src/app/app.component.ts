import { Component, OnInit } from '@angular/core';
import { HelloWeek } from 'hello-week';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hello-week-angular';
  constructor() {}

  ngOnInit() {
    const calendar = new HelloWeek({
      selector: '#calendar',
      lang: 'en',
      langFolder: '/assets/langs/',
    });
    console.log('calendar', calendar);
  }
}
