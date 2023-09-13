//? NARROWING TO NEVER ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Figure = Circle | Square;

function example(shape: Figure) {
    if (shape.kind !== "circle" && shape.kind !== "square") {
        shape;  // never
        return;
    }
}

/*
    - When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left.
    - TypeScript will use a never type to represent such a state which shouldn’t exist.
*/