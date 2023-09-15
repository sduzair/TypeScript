//? NARROWNG EXHAUSTIVENESS CHECKING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Block = Circle | Square;
// type Block = Circle | Square | Triangle;  //! Uncomment this line to see the error

function getAreaOf(shape: Block) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;  //! This is the exhaustive check that fails if narrowing is not exhaustive
            return _exhaustiveCheck;
    }
}

/*
    - The never type is assignable to every type; however, no type is assignable to never (except never itself). 
    - You can use a never type to make sure you haven't forgotten any cases (Exhaustiveness check).
    - This means you can use narrowing and rely on never turning up on the variable and assigning it to a variable of type never.
    - If you miss a case, then the variable will have a type other than never, and you'll get a type error.
*/