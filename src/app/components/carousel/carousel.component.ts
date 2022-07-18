import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
    @Input() public games!: Array<Game>;
    @Input() public slideTimeout: number = 3000;
    public currentIndex = 0;
    private autoNextInterval!: number;

    ngOnInit() {
        this.setupAutoNext();
    }

    private setupAutoNext() {
        this.autoNextInterval = setInterval(() => this.nextSlide(), this.slideTimeout);
    }

    nextButtonClicked() {
        this.nextSlide();
        clearInterval(this.autoNextInterval);
        this.setupAutoNext();
    }

    private nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.games.length;
    }
}
