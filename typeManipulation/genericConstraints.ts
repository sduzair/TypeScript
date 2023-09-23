//? GENERIC CONSTRAINTS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example: 1 - Without Generic Constraints
function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length); //! Error: T doesn't have .length
    return arg;
}

// Example: 2 - With Generic Constraints
function loggingIdentityWithConstraint<T extends { length: number }>(
    arg: T
): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

/*
    - When we know the common capabilities of a set of values, we can use generic constraints to express that.
    - For example, we might want to write a function that works on any and all types that also have .length property.
*/