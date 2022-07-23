import {currentUser} from '../app.component';

export class Game {
    public constructor(
        public id: number,
        public title: string,
        public subtitle: string,
        public description: string,
        public avgRating: number
    ) {}

    public get sliderImageAddress(): string {
        return `assets/images/games/${this.subtitle}/horizontal.jpg`;
    }

    public isInWatchlist(): boolean {
        return currentUser.watchlist.includes(this.id);
    }
}
