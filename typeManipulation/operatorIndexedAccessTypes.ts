/**
 * @file Type Manipulation / Indexed Access Types
 * @desc Indexed Access Types are used to lookup a property type of an object with an index type.
 */

// Example 1
interface Person {
    age: number;
    name: string;
    alive: boolean;
}
type I1 = Person["age" | "name"];  // type I1 = string | number

// Example 2
type AliveOrName = "alive" | "name";
type I2 = Person[AliveOrName];  // type I2 = string | boolean

/**
 * The keyof operator together with the Indexed Access Type T[K], used for getting the type of a property given its name K and a type T representing a set of possible properties, can give you access to an entire class of type manipulation patterns involving so-called Mapped Types.
 */

// Example 3
type I3 = Person[keyof Person];  // type I3 = string | number | boolean

// Example 4
const obj = {
    a: 1,
    b: 2,
    c: "hello"
};

type PropertyTypes = typeof obj[keyof typeof obj];

// Example 5
const myArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 }
];

type Employee = typeof myArray[number]; // type Employee = { name: string, age: number }
type Age = typeof myArray[number]["age"];  // type Age = number
// Or
type Age2 = Employee["age"];  // type Age2 = number

// const key = "age";
// type Age3 = Employee[key];  //! Error: key value cannot be used as a index type

type key = "age";
type Age4 = Employee[key];  // type Age4 = number