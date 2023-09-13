/*
  "compilerOptions": {
    "strictNullChecks": false,                         /* When type checking, take into account 'null' and 'undefined'. /
  }
*/

//? IN OPERATOR NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Problem
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void, fly?: () => void };

function moveWitoutNarrowingDownFromOptionalPropValues(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        return animal.swim();   //! ts error
    } else {
        return animal.fly();    //! ts error
    }
}

// moveWitoutNarrowingDownFromOptionalPropValues({ swim: undefined });

/*
    - "in operator" narrows down to a set of values that have a specific property.
    - The specific property may be required or optional.
    - Here both branches of if statement are type error because animal may not have swim or fly property if it is Human type.
*/

//* Solution 1 - Optional Chaining
function moveWitoutNarrowingDownFromOptionalPropValuesAndOptionalChaining(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        return animal.swim?.();
    } else {
        return animal.fly?.();
    }
}

//* Solution 2 - Truthiness Narrowing
function moveNarrowingDownFromOptionalPropValues(animal: Fish | Bird | Human) {
    if ("swim" in animal && animal.swim) {
        return animal.swim();
    } else if ("fly" in animal && animal.fly) {
        return animal.fly();
    }
}

//* Bad Solution 3 - Checking for Truthiness
function move(animal: Fish | Bird | Human) {
    if (animal.swim) {
        return animal.swim();
    } else if (animal.fly) {
        return animal.fly();
    }
}

// move({ swim: undefined });  //* no error

/*
    - Checking for a property existing is not the same as checking for its truthiness.
    - The property may exist but still be empty string, 0, or false and thus falsy.
*/

// Another Bad Example
type Foo = { a: number, b?: number };
type Bar = { a: number, b: number };

function doStuff(arg: Foo | Bar) {
    if (arg.b) {
        console.log(arg.b);
    }
}

const foo: Foo = { a: 1, b: 0 };

doStuff(foo);