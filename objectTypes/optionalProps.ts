//? DEALING WITH OPTIONAL PROPERTIES IN OBJECT TYPES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example

type Shape = 'circle' | 'square';

interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
}

function paintShape(opts: PaintOptions) {
    let xPos = opts.xPos;   // Type is number | undefined
    let yPos = opts.yPos;   // Type is number | undefined
}

function paintShapeWithDefaults(opts: PaintOptions) {
    let xPos = opts.xPos ?? 0;  // Type is number
    let yPos = opts.yPos ?? 0;  // Type is number
}

function paintShapeWithOptionalParamsWithDefaults({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    xPos;   // Type is number
    yPos;   // Type is number
}
