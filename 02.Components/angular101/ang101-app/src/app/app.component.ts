import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Root Component';
  games = [
    {
      name: 'CS',
      price: 10
    },
    {
      name: 'Fifa 22',
      price: 49
    },
    {
      name: 'Mortal Combat',
      price: 29
    }
  ]

}
