//? CLASS TYPES IN GENERICS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1: Class Types in Generics
function create<T>(c: { new(): T }): T {    //* c: { new(): T } is a Constructor Signature
    return new c();
}

class Person {
    name: string;
    age: number;

    constructor() {
        this.name = "John Doe";
        this.age = 25;
    }
}

let person: Person = create(Person);

/*
    - Class types are represented by Constructor Signatures.
    - When we use create function, we pass the class itself, not an instance of the class.
*/