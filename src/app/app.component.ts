import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggleFlag = false;
  clicks = [];
  counterFlag = 0;

  constructor() {}

  toggleDisplay()
  {
    this.toggleFlag = this.toggleFlag === false;
    ++this.counterFlag;
    this.clicks.push('Click ' + this.counterFlag);
  }

  bgColor()
  {
      return 'blue';
  }

}
