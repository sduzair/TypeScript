//? FUNCTION GENERIC ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1: Without type constraint
function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);

// n is of type 'number'
const n = firstElement([1, 2, 3]);

// a is of type 'string | number | undefined'
const a = firstElement(["a", 1, "c"]);

// u is of type 'undefined'
const u = firstElement([]);


// Example 2: With type constraint
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);

// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");

// const notOK = longest(10, 100);      //! Error! Numbers don't have a 'length' property

// Example 3: Replacement for function overloads?
interface Box<Type> {
    contents: Type;
}

function setContents<Type extends number | string>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
    if (typeof box.contents === "string") {
        const a: string = box.contents;
    }
}

function setContentsOverload(box: { contents: string }, newContents: string): void;
function setContentsOverload(box: { contents: number }, newContents: number): void;
function setContentsOverload(box: { contents: number } | { contents: string }, newContents: number | string): void {
    box.contents = newContents;
    if (typeof box.contents === "string") {
        const a: string = box.contents;
    }
}