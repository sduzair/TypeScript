//? DISCRIMINATED UNION NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Bad example
interface BadCircle {
    radius: number;
}

interface BadSquare {
    sideLength: number;
}

interface BadHexagon {
    sideLength: number;
}

type BadShape = BadCircle | BadSquare | BadHexagon;

function getAreaBad(shape: BadShape) {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2;
    } else if ("sideLength" in shape) {
        return shape.sideLength ** 2;   //! How does TS know that shape is a Square or Hexagon?
    }
}

/*
    - Since types from TypeScript are erased at runtime, the compiler has to rely on the structure of the type to infer the type.
    - In this case, Square and Hexagon have the same structure, so the compiler can't tell the difference between them.
*/


// Good example
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Hexagon {
    kind: "hexagon";
    sideLength: number;
}

type Shape = Circle | Square | Hexagon;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if (shape.kind === "square") {
        return shape.sideLength ** 2;
    } else if (shape.kind === "hexagon") {
        return (3 * Math.sqrt(3) * shape.sideLength ** 2) / 2;
    } else {
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
}

/*
    - When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.
    - The common property is called the discriminant.
    - Discriminated unions are good for representing any sort of messaging scheme like when sending messages over the network (client/server communication), or encoding mutations in a state management framework.
*/