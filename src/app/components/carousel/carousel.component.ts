import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @Input() public games!: Array<Game>;
    @Input() public slideTimeout: number = 3000;
    public currentIndex = 0;
    private autoNextInterval!: number;

    ngAfterViewInit() {
        this.setupAutoNext();
    }

    ngOnDestroy() {
        clearInterval(this.autoNextInterval);
    }

    private setupAutoNext() {
        this.autoNextInterval = setInterval(() => this.nextSlide(), this.slideTimeout);
    }

    public setIndexByClick(newI: number) {
        this.setIndex(newI);
        clearInterval(this.autoNextInterval);
        this.setupAutoNext();
    }

    private nextSlide() {
        this.setIndex(this.currentIndex + 1);
        console.log(`nextSlide ${this.currentIndex}`);
    }

    private setIndex(newI: number) {
        if (newI < 0) {
            this.currentIndex = this.games.length;
        } else if (newI >= this.games.length) {
            this.currentIndex = newI % this.games.length;
        } else {
            this.currentIndex = newI;
        }
        console.log(`setIndex ${this.currentIndex}`);
    }

    // public thumbnails(): Array<Array<string>> {
    //     return this.games.map((g) => [g.title, g.imageData.thumbnail()]);
    // }
}
