//? TYPEGUARD NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example
function example(id: string | number) {
    if (typeof id === "string") {   // type guard
        console.log(id.toUpperCase());
    } else if (typeof id === "number") {    // type guard
        console.log(id.toFixed());
    }
}

example("hello");