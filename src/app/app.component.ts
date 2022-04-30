import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'towards-rest';
  parameters = {
    id_gte: 0,
    id_lte: 3,
  }
}
