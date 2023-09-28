//? TYPES FOR GENERIC FUNCTIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

function identity<T>(arg: T): T {
    return arg;
}

// Inline type annotation of generic function:
const myIdentity: <T>(arg: T) => T = identity;

// We can also write the generic type annotation as a call signature of an object literal type:
const myIdentity2: { <T>(arg: T): T } = identity;

// We can also write the generic type as a call signature of an interface:
interface GenericIdentityFn {
    <T>(arg: T): T;
}

const myIdentity3: GenericIdentityFn = identity;

// We can also write the generic type as a call signature of an interface with a generic parameter:
interface GenericIdentityFn2<T> {
    (arg: T): T;
}

const myidentity4: GenericIdentityFn2<number> = identity;
myidentity4(5);