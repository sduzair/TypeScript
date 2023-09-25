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

// Example 2: Conditional Type
type NumberNodeLL = {
    value: number,
    next: NumberNodeLL | null,
};

type StringNodeLL = {
    value: string,
    next: StringNodeLL | null,
};

type ReturnNodeLL<T extends string | number> = T extends string ? StringNodeLL : NumberNodeLL;

function createLLExample6<T extends string | number>(type: T): ReturnNodeLL<T> {
    throw "Not implemented!";
}

const ll6: NumberNodeLL = createLLExample6(2);

// Example 3: Conditional Type Constraints
type MessageOf<T extends { message: unknown }> = T["message"];

interface Email {
    message: string;
};

type Str = MessageOf<Email>;    // string

// Example 4: Conditional Type Constraints - MessageOf 'any and all' Type
type MessageOfAnyAndAll<T> = T extends { message: unknown } ? T["message"] : never;

interface Dog {
    bark(): void;
}

type DogMessage = MessageOfAnyAndAll<Dog>;    // never
type EmailMessage = MessageOfAnyAndAll<Email>;    // string

// Example 5: Flattening Array Types
type Flatten<T> = T extends any[] ? T[number] : T;

type StringType = Flatten<string[]>;
type NumberType = Flatten<number>;

// Example 6: Infer Keyword
type FlattenWithInfer<T> = T extends Array<infer U> ? U : T;

type StringTypeWithInfer = FlattenWithInfer<string[]>;
type NumberTypeWithInfer = FlattenWithInfer<number>;

// Example 7: Infer Keyword - Helper Type Alias
type ReturnTypeAlias<T extends (...arg: any) => any> = T extends (...arg: any) => infer U ? U : any;

type NumType = ReturnTypeAlias<() => number>;   // number
type StrType = ReturnTypeAlias<(x: string) => string>;   // string

// Example 8: Distributive Conditional Types
/**
 * @desc When the generic in the Conditional Type is a Union Type, the Conditional Type is applied to each constituent of the Union Type.
 */
type ToArray<T> = T extends any ? T[] : never;
/**
 * @desc To avoid the Distributive Conditional Type, wrap the generic in an array.
 */
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
// type ToArrayNonDist<T> = T[];    // equivalent

type StrArrOrNumArr = ToArray<string | number>;      // string[] | number[]
type StrOrNumArrNonDist = ToArrayNonDist<string | number>;     // (string | number)[]

const strArrOrNumArr: StrArrOrNumArr = [1, 2];
const strOrNumArrNonDist: StrOrNumArrNonDist = ["1", 2];