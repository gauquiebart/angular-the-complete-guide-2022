import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

    @Output() numberCreated = new EventEmitter<number>();
    intervalId;

    constructor() {
    }

    ngOnInit(): void {
    }

    onStartGame() {
        let number = 0;
        this.intervalId = setInterval(function(){ 
            this.numberCreated.emit(number++);
        }.bind(this), 1000);
    }

    onStopGame() {
        clearInterval(this.intervalId);
    }
}
