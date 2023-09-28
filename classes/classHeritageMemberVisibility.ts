/**
 * @file Classes / Member Visibility
 * @description TypeScript supports public, private, and protected access modifiers on class members. By default, all class members are public. Here we show some caveats of access modifiers in TypeScript.
 */

/** 
 * Example 1: Soft private
 * - Access modifiers in TypeScript are only enforced at compile time. This means that if you transpile your code to JavaScript, the access modifiers will not be enforced and technically all members will be public hence private members are called soft private.
 * - Possible advantage can be that you can access private members in your unit tests.
 */
class MySafe {
    private secret: number = 12345;
}

const mySafe = new MySafe();
// console.log(mySafe.secret);     //! Error: This does not give a runtime error

/** 
 * Example 2: Private members are accessible using bracket notation
 */
console.log(mySafe["secret"]);

/** 
 * Example 3: Hard private
 * - TypeScript 3.8 introduced a new syntax for hard private members. Hard private members are enforced at runtime and cannot be accessed from outside the class.
 * - Useful if you want to protect values in the class from malicious actors. Other mechanisms that offer runtime protection are Closures and WeakMaps.
 */
class MySafeHardPrivate {
    #mySecret: number = 12345;
}

const mySafeHardPrivate = new MySafeHardPrivate();
// console.log(mySafeHardPrivate.#mySecret);   //! Error
console.log(mySafeHardPrivate["#mySecret"]);    //! Unexpected Failure: This gives an undefined
