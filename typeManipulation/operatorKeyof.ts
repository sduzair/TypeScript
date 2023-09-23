/**
 * @file Type Manipulation / keyof Operator
 * @desc Operator keyof is used for extracting the keys from a type.
 */

// Example 1
interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person;     // "name" | "age"

// Example 2
type Arrayish = { [n: number]: unknown };
type ArrayishKeys = keyof Arrayish;     // number

// Example 3
type Mapish = { [k: string]: boolean };
type MapishKeys = keyof Mapish;     // string | number

/**
 * The keyof operator together with the Indexed Access Type T[K], used for getting the type of a property given its name K and a type T representing a set of possible properties, can give you access to an entire class of type manipulation patterns involving so-called Mapped Types.
 */
