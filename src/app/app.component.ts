import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bluenote-ui';
  james = 'another one';
}

export class Person {
  name: string;
  age: number;
}
