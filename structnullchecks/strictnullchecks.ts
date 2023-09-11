/*
    "compilerOptions": {
        "strictNullChecks": false,                         /* When type checking, take into account 'null' and 'undefined'. /
    }
 */

//? STRINGNULLCHECKS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Problem: TS doesn't complain when null or undefined not checked
function doSomethingWithoutNullCheck(x: string) {
    console.log("Hello, " + x.toUpperCase());   //! type error
}

let word: string;   // implicitly undefined
doSomethingWithoutNullCheck(word);

interface WordMap {
    word1: string;
    word2?: string;
}

const wordMap: WordMap = {
    // word1: "word1",
    word1: word,
}

doSomethingWithoutNullCheck(wordMap.word1);
doSomethingWithoutNullCheck(wordMap.word2);     // implicitly undefined

/*
    When "strictNullChecks" is disabled:
    - TS won't complain when null or undefined not checked
    - Any type can be implicitly undefined
    - Always check for null or undefined
 */

//* SOLUTION 1: Check for null or undefined
function doSomethingWithNullCheck(x: string) {
    if (!x) return;
    console.log("Hello, " + x.toUpperCase());
}

//* SOLUTION 2: Enable strictNullChecks
function doSomethingWithStringNullChecks(x: string) {
    console.log("Hello, " + x.toUpperCase());
}
