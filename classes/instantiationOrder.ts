/**
 * @file Classes / Instantiation order
 * @description The order of instantiation for classes can be surprising.
 */

class Base {
    name = "base";
    constructor() {
        console.log(`My name is ${this.name}`);
    }
}

class Derived extends Base {
    name = "derived";
}

/**
 * Prints "base" not "derived".
 * Instantiation order:
 *  - The base class fields are initialized
 *  - The base class constructor runs
 *  - The derived class fields are initialized
 *  - The derived class constructor runs
 */
const d = new Derived();