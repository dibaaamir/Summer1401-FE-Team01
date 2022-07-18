import {GameImageData} from './game-image-data';

export class Game {
    constructor(
        public title: string,
        public description: string,
        public ratings: Map<string, number>,
        public imageData: GameImageData
    ) {}
}
