import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'towards-rest';
  datetime_start = new Date('2022-01-01').toISOString();
  datetime_end = new Date('2022-01-02').toISOString();
}
