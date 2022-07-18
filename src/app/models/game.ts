import {GameImageData} from './game-image-data';

export class Game {
    constructor(
        public title: string,
        public description: string,
        public ratings: Map<string, number>,
        public imageData: GameImageData
    ) {}

    public avgRating(): number {
        return Array.from(this.ratings.values()).reduce((a, b) => a + b, 0) / this.ratings.size;
    }
}
