//? OBJECT DESTRUCTURING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1 - Simple object destructuring
function example({ shape, xPos, yPos }: PaintOptions) {
    // ...
}

// Example 2 - Object destructuring with default values
function example2({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    // ...
}

// Example 3 - Object destructuring with renaming
function example3({ shape: shp, xPos, yPos }: PaintOptions) {
    // ...
    shape   //! Error! shape is not defined
}

// Example 4 - Object destructuring with renaming and default values
function example4({ shape: shp, xPos: xPosition = 0, yPos: yPosition = 0 }: PaintOptions) {
    // ...
    shape   //! Error! shape is not defined
    xPos    //! Error! xPos is not defined
    yPos    //! Error! yPos is not defined
}