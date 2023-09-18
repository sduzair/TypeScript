//? OBJECT DESTRUCTURING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface PaintOpts {
    shape: string;
    xPos?: number;
    yPos?: number;
}


// Example 1 - Simple object destructuring
function example({ shape, xPos, yPos }: PaintOpts) {
    // ...
}

// Example 2 - Object destructuring with default values
function example2({ shape, xPos = 0, yPos = 0 }: PaintOpts) {
    // ...
}

// Example 3 - Object destructuring with renaming
function example3({ shape: shp, xPos, yPos }: PaintOpts) {
    // ...
    shape   //! Error! shape is not defined
}

// Example 4 - Object destructuring with renaming and default values
function example4({ shape: shp, xPos: xPosition = 0, yPos: yPosition = 0 }: PaintOpts) {
    // ...
    shape   //! Error! shape is not defined
    xPos    //! Error! xPos is not defined
    yPos    //! Error! yPos is not defined
}