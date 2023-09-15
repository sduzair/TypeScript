//? FUNCTION CALL SIGNATURE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface Callable {
    (n?: number): string;   // Note: the arrow function syntax is not allowed here
}

// type Callable = (n?: number) => string;

function fn(ctor: Callable) {
    const s = ctor(42);
}

const fn2: Callable = (n = 0) => {
    return n.toString();
};