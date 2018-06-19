import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  date: Date;

  ngOnInit() {

    this.date = new Date(2016, 3, 16, 12, 49, 10);
  }
}
