import {GameImageData} from './game-image-data';
import {currentUser} from '../app.component';

export class Game {
    constructor(
        public id: number,
        public title: string,
        public shortTitle: string,
        public description: string,
        public ratings: Map<string, number>,
        public imageData: GameImageData
    ) {}

    public avgRating(): number {
        return Math.floor((Array.from(this.ratings.values()).reduce((a, b) => a + b, 0) / this.ratings.size) * 10) / 10;
    }

    public isInWatchlist(): boolean {
        return currentUser.watchlist.includes(this.id);
    }
}
