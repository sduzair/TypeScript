/**
 * @file Type Manipulation / Mapped Types / Key Remapping
 * @desc Keys in Mapping Types can be remapped using the 'as' keyword.
 */

// Example 1: Using Template Literal Types
type Getters<T> = {
    [P in keyof T as `get${Capitalize<P & string>}`]: () => T[P]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

/**
 * type LazyPerson = {
 *     getName: () => string;
 *     getAge: () => number;
 *     getLocation: () => string;
 * }
 */
type LazyPerson = Getters<Person>;

// Example 2: Filtering out keys
type RemoveKindField<T> = {
    [P in keyof T as Exclude<P, "kind">]: T[P]
}

interface Circle {
    kind: "circle";
    radius: number;
}

/**
 * type KindlessCircle = {
 *     radius: number;
 * }
 */
type KindlessCircle = RemoveKindField<Circle>;

// Example 3: Mapping over Unions
type EventConfig<T extends { "kind": string }> = {
    [E in T as E["kind"]]: (event: E) => void
};

type SquareEvent = { kind: "square", sideLength: number };
type CircleEvent = { kind: "circle", radius: number };

/**
 * type Config = {
 *     square: (event: SquareEvent) => void;
 *     circle: (event: CircleEvent) => void;
 * }
 */
type Config = EventConfig<SquareEvent | CircleEvent>;

// Example 4: Mapped type using Conditional Types
type ExtractPII<T> = {
    [K in keyof T]: T[K] extends { pii: true } ? true : false
};

type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
    age: { type: number };
};

/**
 * type ObjectsNeedingGDPRDeletion = {
 *     id: false;
 *     name: true;
 *     age: false;
 * }
 */
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
