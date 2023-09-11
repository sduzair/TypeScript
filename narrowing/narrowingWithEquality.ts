//? EQUALITY NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1
function example(x: string | number, y: string | boolean) {
    if (x === y) { // equality narrowing
        // types of x and y narrowed down to 'string'
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

example("hello", "hello");

// Example 2
function printAllNarrowingDownFromNullWithEqualityNarrowing(strs?: string | string[] | null) {
    if (strs !== null && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    if (typeof strs === "string") {
        console.log(strs);
    }
}
