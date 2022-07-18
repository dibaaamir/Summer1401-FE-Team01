export class GameImageData {
    public normalIndexes: Array<number>;

    constructor(
        public images: Array<string>,
        public overlayIndex: number,
        public titleIndex: number,
        public backgroundIndex: number,
        public thumbnailIndex: number,
        public style: string = ''
    ) {
        this.normalIndexes = Array(images.length).filter(
            (_, i, __) => ![overlayIndex, titleIndex, backgroundIndex].includes(i)
        );
    }

    public thumbnail(): string {
        return this.images[this.thumbnailIndex];
    }

    public background(): string {
        return this.images[this.backgroundIndex];
    }

    public overlay(): string {
        return this.images[this.overlayIndex];
    }

    public title(): string {
        return this.images[this.titleIndex];
    }
}
