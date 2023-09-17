//? REST PARAMETERS IN FUNCTIONS ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
const b = multiply(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/*
    - Functions that take an unbounded number of arguments using rest parameters.
    - Implicitly any[] instead of any
    - Any type annotation given must be of the form Array<T> or T[], or a tuple type
*/