export class GameImageData {
    public normalIndexes: Array<number>;

    constructor(
        public images: Array<string>,
        public overlayIndex: number,
        public titleIndex: number,
        public backgroundIndex: number
    ) {
        this.normalIndexes = Array(images.length).filter(
            (_, i, __) => ![overlayIndex, titleIndex, backgroundIndex].includes(i)
        );
    }
}
