//? GENERICS INFERENCE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

interface NodeLL<T extends string | number> {
    value: T;
    next: NodeLL<T> | null;
}

// Example 1 : Bad Return Type Inference
function createLLExample1(type: string | number) {
    if (typeof type === "number") {
        const firstNode: NodeLL<number> = { value: 1, next: null };
        let prevNode: NodeLL<number> = firstNode;
        for (let i = 2; i < 11; i++) {
            const llNode: NodeLL<number> = { value: i, next: null };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    } else {
        const firstNode: NodeLL<string> = {
            value: String.fromCharCode(97 + 0),
            next: null,
        };
        let prevNode: NodeLL<string> = firstNode;
        for (let i = 1; i < 11 + 1; i++) {
            const llNode: NodeLL<string> = {
                value: String.fromCharCode(97 + i),
                next: null,
            };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    }
}

type Example1 = (arg: string | number) => NodeLL<number> | NodeLL<string>;
const createLLExample1Type: Example1 = createLLExample1;

// @ts-expect-error
const ll1: NodeLL<number> = createLLExample1(2); //! Error: Type 'NodeLL<number> | NodeLL<string>' is not assignable to type 'NodeLL<number>'.

/*
    - We know based on the implementation that the return type is NodeLL<number> when the parameter is a number and NodeLL<string> when the parameter is a string.
    - However, TypeScript isn't able to make the association between the parameter and return type and infers the return type to be NodeLL<number> | NodeLL<string> in any case.
*/

// Example 2 : Bad Argument Type Inference
function createLLExample2<T extends string | number>(type: T) {
    if (typeof type === "number") {
        const firstNode: NodeLL<number> = { value: 1, next: null };
        let prevNode: NodeLL<number> = firstNode;
        for (let i = 2; i < 11; i++) {
            const llNode: NodeLL<number> = { value: i, next: null };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    } else {
        const firstNode: NodeLL<string> = {
            value: String.fromCharCode(97 + 0),
            next: null,
        };
        let prevNode: NodeLL<string> = firstNode;
        for (let i = 1; i < 11 + 1; i++) {
            const llNode: NodeLL<string> = {
                value: String.fromCharCode(97 + i),
                next: null,
            };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    }
}

type Example2 = <T extends string | number>(arg: T) => NodeLL<string> | NodeLL<number>;
const createLLExample2Type: Example2 = createLLExample2;

// @ts-expect-error
const ll2: NodeLL<number> = createLLExample2(2); //! Error: Type 'NodeLL<number> | NodeLL<string>' is not assignable to type 'NodeLL<number>'.

/*
    - It looks at createLLExample(1/2)'s implementation, and from the two returns it infers the return type is NodeLL<string> | NodeLL<number>.
    - The return types are in actuality associated with the function parameter type but this association has to be explicitly set with Generics.
*/

// Example 3 : Good Return Type Inference
function createLL<T extends string | number>(array: T[]) {
    const firstNode: NodeLL<T> = { value: array[0], next: null };
    let prevNode: NodeLL<T> = firstNode;
    for (let i = 1; i < array.length; i++) {
        prevNode.next = {
            value: array[i],
            next: null,
        };
        prevNode = prevNode.next;
    }
    return firstNode;
}

type Example3 = <T extends string | number>(arg: T[]) => NodeLL<T>;
const createLLType: Example3 = createLL;

const ll3: NodeLL<number> = createLL([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
    - Here the associaiton between the parameter and return type is made explicit with Generic type.
    - The return type is inferred to be NodeLL<number>. Looking at the call signature we are calling createLL with an array of numbers number[], TS will infer the type T to be number through 'Type argument inference' and therefore return type is NodeLL<number>.
    - The call site and return statements determine the types. No need look at the implementation.
*/

// Example 4 - Inference facilitated by function overloads
function createLLExample4(type: string): NodeLL<string>;
function createLLExample4(type: number): NodeLL<number>;
function createLLExample4(type: string | number) {
    if (typeof type === "number") {
        const firstNode: NodeLL<number> = { value: 1, next: null };
        let prevNode: NodeLL<number> = firstNode;
        for (let i = 2; i < 11; i++) {
            const llNode: NodeLL<number> = { value: i, next: null };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    } else {
        const firstNode: NodeLL<string> = {
            value: String.fromCharCode(97 + 0),
            next: null,
        };
        let prevNode: NodeLL<string> = firstNode;
        for (let i = 1; i < 11 + 1; i++) {
            const llNode: NodeLL<string> = {
                value: String.fromCharCode(97 + i),
                next: null,
            };
            prevNode.next = llNode;
            prevNode = llNode;
        }
        return firstNode;
    }
}

const ll4: NodeLL<number> = createLLExample4(2);

/*
    - Here the association between the parameter and return type is made explicit with function overloads.
    - The return type is inferred to be NodeLL<number>. Looking at the call signature we are calling createLL with a number, TS will infer the return type to be NodeLL<number>.
    - This example does not use Generics.
    - Here the inference is made based on the call site and not the implementation. The implementation may not be consistent with the call site. (see example 5)
*/

// Example 5 - Inference facilitated by function overloads (Bad Implementation)
function createLLExample5(type: string): NodeLL<string>;
function createLLExample5(type: number): NodeLL<number>;
function createLLExample5(type: string | number) {
    if (typeof type === "number") {
        const firstNode: NodeLL<string> = {
            value: String.fromCharCode(97 + 0),
            next: null,
        };
        return firstNode;
    } else {
        const firstNode: NodeLL<number> = { value: 1, next: null };
        return firstNode;
    }
}

const ll5: NodeLL<number> = createLLExample5(2);    // Unexpected Failure as NodeLL<string> is returned.

ll5.value.toExponential();  //! Runtime Error: ll5.value.toExponential is not a function

// Example 6 - Inference using Conditional Types
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