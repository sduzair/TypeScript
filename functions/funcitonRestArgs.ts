//? REST ARGUMENTS IN FUNCTIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

/*
    - Provide a variable number of arguments from an iterable object (for example, an array) using the spread syntax.
*/

// Problem

const args = [8, 5];
const angle = Math.atan2(...args);      //! atan2(y: number, x: number): number - expects two numbers

/*
    - Inferred args type is number[], not specifically two numbers (immutable) which is what Math.atan2 expects.
*/

// Solution - 1
const args1 = [8, 5] as const;
const angle1 = Math.atan2(...args1);

// Solution - 2
const args2: [8, 5] = [8, 5];
const angle2 = Math.atan2(...args2);