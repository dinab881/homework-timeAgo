import {Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  date: Date;


  ngOnInit() {
    this.date = new Date(2018, 6, 8, 16, 53, 0);
  }


}
