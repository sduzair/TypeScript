// Example 1
class Animal {
    move() {
        console.log("Moving!");
    }
}

class Dog extends Animal {
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}

const dog = new Dog();
// Base class method
dog.move();
// Derived class method
dog.woof(3);

// Example 2 - Overriding methods
class Base {
    greet() {
        console.log("Hello!");
    }
}

class Derived extends Base {
    // override
    greet(name?: string): void {
        if (name === undefined) super.greet();
        else console.log(`Hello ${name}`);
    }
}

const d = new Derived();
d.greet();
d.greet("Tom");

/**
 * Legal to refer to a derived class instance through a base class reference.
 */
const b: Base = d;
b.greet();
// b.greet("Tom");  //!Error: Expected 0 args but got 1