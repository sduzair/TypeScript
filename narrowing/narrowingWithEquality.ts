//? EQUALITY NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1 - strict equality
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

// Example 2 - typeof null === "object"
function printAllNarrowingDownFromNullWithEqualityNarrowing(strs?: string | string[] | null) {
    if (strs !== null && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

/*
    In the first if statement, we check for null and typeof object
    - typeof null === "object"
    - so we need to check for null and also check for object
    - what remains is string[] (undefined is not object, typeof undefined === "undefined")
*/

// Example 3 - loose equality
interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);

        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}

/*
    In the if statement, we check for null and undefined
    - loose equality is used here
    - != null is equivalent to !== null && !== undefined
    - what remains is number
*/
