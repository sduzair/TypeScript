/**
 * @file Type Manipulation / Conditional Types
 * @desc Conditional types let you choose types based on other types. Help describe relation between inputs and outputs.
 */

// Example 1: Conditional Type
interface Animal {
    live(): void;
}
interface Dog extends Animal {
    woof(): void;
}

type ExampleType1 = Dog extends Animal ? number : string;   // number

type ExampleType2 = RegExp extends Animal ? number : string;   // string