//? VOID RETURN BEHAVIOR IN FUNCTIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

type VoidFunc = () => void;

const f1: VoidFunc = () => {
    return true;
};

const f2: VoidFunc = () => true;

const f3: VoidFunc = function () {
    return true;
};

const v1 = f1();    // v1: void
const v2 = f2();    // v2: void
const v3 = f3();    // v3: void

/*
    - Contextual typing with a return type of void does not force functions to not return something.
    - This behavior is intentional and by design to allow for the following:
*/

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));

/*
    - forEach expects a function with void return type, but the callback function returns a number ('push' returns new length of the array).
*/