import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @Input() public games!: Array<Game>;
    public slideTimeout: number = 4000;
    public currentIndex = 0;
    private autoNextInterval!: number;

    public ngAfterViewInit(): void {
        this.setupAutoNext();
    }

    public ngOnDestroy(): void {
        clearInterval(this.autoNextInterval);
    }

    private setupAutoNext(): void {
        this.autoNextInterval = setInterval(() => this.nextSlide(), this.slideTimeout);
    }

    public setIndexByClick(newI: number): void {
        this.setIndex(newI);
        clearInterval(this.autoNextInterval);
        this.setupAutoNext();
    }

    private nextSlide(): void {
        this.setIndex(this.currentIndex + 1);
        console.log(`nextSlide ${this.currentIndex}`);
    }

    private setIndex(newI: number): void {
        if (newI < 0) {
            this.currentIndex = this.games.length;
        } else if (newI >= this.games.length) {
            this.currentIndex = newI % this.games.length;
        } else {
            this.currentIndex = newI;
        }
        console.log(`setIndex ${this.currentIndex}`);
    }
}
