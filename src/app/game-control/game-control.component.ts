import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<Number>();
  num: number = 0;
  ref;

  constructor() {
  }

  ngOnInit(): void {
  }

  startTheGame(): void {
    this.ref = setInterval( () => this.startGame.emit(++this.num), 1000 );
  }

  stopTheGame(): void {
    clearInterval(this.ref);
  }

}
