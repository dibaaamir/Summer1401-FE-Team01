import {Component, Input} from '@angular/core';
import {Game} from '../../models/game';
import {currentUser} from '../../app.component';

@Component({
    selector: 'app-carousel-item',
    templateUrl: './carousel-item.component.html',
    styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
    @Input() public game!: Game;
    @Input() public currentIndex!: number;

    public addToWatchlist(): void {
        currentUser.watchlist.push(this.game.id);
    }
}
