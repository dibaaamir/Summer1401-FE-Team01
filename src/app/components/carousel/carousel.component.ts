import {AfterViewInit, Component, Input} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
    @Input() public games!: Array<Game>;
    @Input() public slideTimeout: number = 3000;
    public currentIndex = 0;
    private autoNextInterval!: number;

    ngAfterViewInit() {
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
        console.log(`nextSlide ${this.currentIndex}`);
    }

    private prevSlide() {
        if (this.currentIndex == 0) this.currentIndex = this.games.length - 1;
        else this.currentIndex = this.currentIndex - 1;
        console.log(`prevSlide ${this.currentIndex}`);
    }

    public thumbnails(): Array<Array<string>> {
        return this.games.map((g) => [g.title, g.imageData.thumbnail()]);
    }
}
