//? INSTANCEOF OPERATOR NARROWNG ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}

const d = new Date();
logValue(d);

/*
    - The instanceof operator checks whether a value is an instance of another value.
    - In this case, it checks whether x is an instance of Date.
    - If the check succeeds, TypeScript narrows the type of x to Date in the if branch.
*/


