//? OPTIONAL PARAMS IN CALLBACK ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Optional params in callback can be problematic

// Example 1: Optional params in callback
function myForEachGood(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);    // Not necessary that the callback has 2 params but works
    }
}

myForEachGood([1, 2, 3], (a) => console.log(a));
myForEachGood([1, 2, 3], (a, i) => console.log(a, i));

/*
    - In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TypeScript behaves the same way.
*/

// Example 2: Optional params in callback - Problematic
function myForEachBad(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);   //! Problematic because in the case callback has two params this does not work as expected  
    }
}

myForEachBad([1, 2, 3], (a) => console.log(a));     // Works fine without 2nd param

myForEachBad([1, 2, 3], (a, i) => console.log(a, i));   //! Expected to be 1 0, 2 1, 3 2 but it is 1 undefined, 2 undefined, 3 undefined

myForEachBad([1, 2, 3], (a, i) => {     //! TS Error here as the callback performs operation on the 2nd param
    console.log(i.toFixed());
});

// Example 3: Optional params in callback - Problematic sometimes useful
function myForEachUseful(arr: any[], callback: (arg: any, asIsParam?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);   // With this the caller will be told unwantedParam cannot have any operation performed on it
    }
}

myForEachUseful([1, 2, 3], (a, i) => {
    console.log(i.toFixed());
});

/*
    - You convey to the caller that the second parameter cannot have any operation performed on it.
*/