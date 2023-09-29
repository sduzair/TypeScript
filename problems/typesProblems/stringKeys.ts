type Person = {
    id: string,
    name: string,
    age: number,
    4: number
}

// Create a union type of all keys in `Person`
type Keys = keyof Person;
//   ^?

const a: Keys = "id";

const c: Keys = 4;

// Create a union of string keys in `Person`
// Solution
type StringKeys = Extract<Keys, string>;
//   ^?

const a2: StringKeys = "id";

// const c2: StringKeys = 4;    //! Error

// Solution
type StringKeys2 = Extract<keyof Person, string>;
//   ^?

const a3: StringKeys2 = "id";

// const c3: StringKeys2 = 4;   //! Error

// Create a union of string property types in `Person`
// Solution with Immediately Idexed Mapped Type
type StringPropertyTypes = {
    // ^?
    [K in keyof Person]: Person[K] extends string ? K : never;
}[keyof Person];

const x: StringPropertyTypes = "id";

// const y: StringKeys = 4;     //! Error