/**
 * @file Classes / Generic Classes
 * @description TypeScript supports generic classes. These are classes that take a type as a parameter. The new keyword instantiation works similarly to function invocation and this allows for type inference.
 */

/**
 * Example 1: Generic class
 */
class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }
}

const box = new Box("Hello World");
console.log(box.contents);  // type of contents is string

/**
 * Example 2: Generic class with static members
 */
class BoxWithStatic<T> {
    // static defaultValue: T;  //! Error: Static members cannot reference class type parameters.
    contents: T;
    static sideLength = 10;

    constructor(value: T) {
        this.contents = value;
    }
}

console.log(BoxWithStatic.sideLength);   // type of sideLength is number