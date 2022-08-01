import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
    @Input() public games: Array<Game> = [];

    public readonly SLIDE_TIMEOUT: number = 4_000;
    public currentIndex!: number;

    private autoNextInterval!: number | null;

    public ngAfterViewInit(): void {
        this.setupInterval();
        this.setIndex(0);
    }

    public ngOnDestroy(): void {
        this.clearInterval();
    }

    public setupInterval(): void {
        this.autoNextInterval = setInterval(() => this.intervalNextSlide(), this.SLIDE_TIMEOUT);
    }

    public clearInterval(): void {
        if (!!this.autoNextInterval) {
            clearInterval(this.autoNextInterval);
            this.autoNextInterval = null;
        }
    }

    public setIndexByClick(newI: number): void {
        this.setIndex(newI);
        clearInterval(this.autoNextInterval!);
        this.setupInterval();
    }

    public nextButtonClickHandler(): void {
        this.setIndexByClick(this.currentIndex + 1);
    }

    public intervalNextSlide(): void {
        this.setIndex(this.currentIndex + 1);
    }

    private setIndex(newI: number): void {
        if (newI < 0) this.currentIndex = this.games.length;
        else if (newI >= this.games.length) this.currentIndex = newI % this.games.length;
        else this.currentIndex = newI;
    }
}
