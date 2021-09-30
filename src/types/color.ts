export enum PixelColors {
    PURPLE = '#8344FF',
    RED = '#FE3A3A',
    YELLOW = '#FFBB31',
    BLACK = '#000000',
    DEFAULT = '#FFFFFF',
}

export type PixelColorType = typeof PixelColors[keyof typeof PixelColors];
