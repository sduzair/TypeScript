/*
  "compilerOptions": {
    "strictNullChecks": false,                         /* When type checking, take into account 'null' and 'undefined'. /
  }
*/

//? TRUTHINESS NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Problem
function printAllWithoutNarrowingDownFromNull(strs?: string | string[] | null) {
    if (typeof strs === "object") {
        for (const s of strs) {     //! type error because strs is possibly null
            console.log(s);
        }
    }
    if (typeof strs === "string") {
        console.log(strs);
    }
}

let words: string[] = null;
printAllWithoutNarrowingDownFromNull(words);

/*
    - Assumption that type of arrays is "object" is true but...
    - typeof null === "object" is also true, so we need to further narrow down variable 'strs'.
    - here we use "Truthiness narrowing" to narrow down to string[] from string[] | null.
*/

//* Solution
function printAllNarrowingDownFromNullWithTruthinessNarrowing(strs?: string | string[] | null) {
    if (strs && typeof strs === "object") {  // "Truthiness narrowing"
        for (const s of strs) {
            console.log(s);
        }
    }
    if (typeof strs === "string") {
        console.log(strs);
    }
}

/*
    - "Truthiness narrowing" coerces strs param to boolean in if condition and narrows down to a set of values that cannot be coerced to false like null, undefined, 0, NaN, "".  
    - Combined with type guard, we can narrow down to string[].
*/