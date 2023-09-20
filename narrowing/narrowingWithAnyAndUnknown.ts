//? ANY AND UNKNOWN ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

type Foo = { a: number; b?: { d?: number; }; };

function doSomethingWithUnknown(foo: unknown) {
    if (typeof foo === "object" && foo && "b" in foo) {
        if (typeof foo.b === "object" && foo.b && "d" in foo.b) {
            if (typeof foo.b.d === "number") {
                console.log(foo.b.d + 1);
            }
        }
    }
}

function doSomethingWithAny(foo: any) {
    console.log(foo.b.d);
}

/*
    - The difference between unknown and any is that unknown is much less permissive than any: we have to do some form of type checking before performing most operations on values of type unknown, whereas we don’t have to do any checks before performing operations on values of type any.
    - NOTE: We check for truthiness of foo and foo.b because null is an object and satisfies the typeof "object" check.
    - Boolean({}) === true, so we can use truthiness to check object is not null. 
*/

