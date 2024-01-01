//? ASSERTION FUNCTION NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Assertion Signature Type 1
function yellWithoutAssertFunction(str) {   // str: any
    return str.toUppercase();   //! TS unable to infer type of str as string
}

function yellWithAssertFunction(str) {
    assert(typeof str === "string");
    // @ts-expect-error
    return str.toUppercase();
    //         ~~~~~~~~~~~
    // error: Property 'toUppercase' does not exist on type 'string'.
    //        Did you mean 'toUpperCase'?
}

function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        // throw new AssertionError(msg);
        throw new Error(msg);
    }
}

/*
    - asserts condition says that whatever gets passed into the condition parameter must be true if the assert returns (because otherwise it would throw an error). That means that for the rest of the scope, that condition must be truthy.
    - This is why we get a type error on the line return str.toUppercase(); pointing out that the toUppercase method does not exist on type string. (misspelled)
*/

// Assertion Signature Type 2
function yellWithAssertFunctionType2(str) {
    assertIsString(str);
    // @ts-expect-error
    return str.toUppercase();
    //         ~~~~~~~~~~~
    // error: Property 'toUppercase' does not exist on type 'string'.
    //        Did you mean 'toUpperCase'?
}

function assertIsString(val: any): asserts val is string {
    if (typeof val !== "string") {
        // throw new AssertionError("Not a string!");
        throw new Error("Not a string!");
    }
}

/*
    - This type of assertion signature doesn’t check for a condition, but instead tells TypeScript that a specific variable or property has a type.
        - These assertion signatures are very similar to writing type predicate signatures.
    */
