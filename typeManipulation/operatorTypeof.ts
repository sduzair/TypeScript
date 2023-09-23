/**
 * @file Type Manipulation / typeof Operator
 * @desc The typeof operator takes a value or expression and produces a string which names the type of the value.
 */

// Example 1
let s = "hello";
let n: typeof s;    // let n: string

// Example 2
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // type K = boolean

// Example 3
function f() {
    return { x: 10, y: 3 };
}

// type P = ReturnType<f()>;   //! Error
type P = ReturnType<typeof f>;  // type P = { x: number, y: number }