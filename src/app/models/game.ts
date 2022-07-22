import {GameImageData} from './game-image-data';
import {currentUser} from '../app.component';

export class Game {
    public constructor(
        public id: number,
        public title: string,
        public subtitle: string,
        public description: string,
        public avgRating: number,
        public imageData: GameImageData
    ) {}

    public isInWatchlist(): boolean {
        return currentUser.watchlist.includes(this.id);
    }
}
