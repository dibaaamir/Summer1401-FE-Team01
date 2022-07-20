export class GameImageData {
    public normalIndexes: Array<number>;

    public constructor(
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

    public get thumbnail(): string {
        return this.images[this.thumbnailIndex];
    }

    public get background(): string {
        return this.images[this.backgroundIndex];
    }

    public get overlay(): string {
        return this.images[this.overlayIndex];
    }

    public get title(): string {
        return this.images[this.titleIndex];
    }
}
