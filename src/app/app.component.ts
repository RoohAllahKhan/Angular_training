import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  checkNumber(num: number) {
    if (num % 2 == 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
  }
}
