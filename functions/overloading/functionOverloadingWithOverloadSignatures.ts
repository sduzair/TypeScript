//? FUNCTION OVERLOADING WITH OVERLOAD SIGNATURES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1:
function makeDateExample(timestamp: number): Date;  // Overload signature
function makeDateExample(m: number, d: number, y: number): Date;    // Overload signature
function makeDateExample(mOrTimestamp: number, d?: number, y?: number): Date {  // Implementation signature
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

const a1 = makeDateExample(12345678);
const a2 = makeDateExample(5, 5, 5);


// Implementation Signature Problem
const a3 = makeDateExample(2, 3);   //! Error because the Implementation signature or signature used to write the function body can’t be “seen” from the outside.


// Example 2: Incompatible Implementation Signature Problem
function makeDateExample2(timestamp: number): Date;
function makeDateExample2(timestamp: string): Date;     //! Error: Overload signature is not compatible with implementation signature
function makeDateExample2(timestamp: number): Date {
    if (typeof timestamp === 'number') {
        return new Date(timestamp);
    } else {
        return new Date(timestamp);
    }
}

// Solution - Make the Implementation signature compatible with the Overload signatures
function makeDateExample2Sol(timestamp: number): Date;
function makeDateExample2Sol(timestamp: string): Date;
function makeDateExample2Sol(timestamp: number | string): Date {
    if (typeof timestamp === 'number') {
        return new Date(timestamp);
    } else {
        return new Date(timestamp);
    }
}

// Example 3: Avoiding Function Overloads with Union Types
interface TimeStamp {
    kind: 'timestamp';  // Discriminant
    timestamp: number;
}
interface MonthDayYear {
    kind: 'monthDayYear';
    month: number;
    day: number;
    year: number;
}

type DateLike = TimeStamp | MonthDayYear;   // Discriminated Union Type

function makeDateExample4(time: DateLike): Date {
    switch (time.kind) {
        case 'timestamp':
            return new Date(time.timestamp);
        case 'monthDayYear':
            return new Date(time.year, time.month, time.day);
        default:
            const _exhaustiveCheck: never = time;  // Exhaustive Check - Ensures that all possible cases are handled
            return _exhaustiveCheck;
    }
}

/*
    - Always prefer parameters with union types instead of function overloads when possible
*/

// Example 4: Function Overloads with Union Types
function makeDateExample5(month: number, day: number, year: number): Date;
function makeDateExample5(time: number): Date;
function makeDateExample5(time: TimeStamp): Date;
function makeDateExample5(time: MonthDayYear): Date;
function makeDateExample5(x: TimeStamp | MonthDayYear | number, y?: number, z?: number): Date {
    if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
        return new Date(z, x, y);
    } else if (typeof x === 'number') {
        return new Date(x);
    } else if ("kind" in x) {
        switch (x.kind) {
            case 'timestamp':
                return new Date(x.timestamp);
            case 'monthDayYear':
                return new Date(x.year, x.month, x.day);
            default:
                const _exhaustiveCheck: never = x;
                return _exhaustiveCheck;
        }
    } else {
        const _exhaustiveCheck: never = x;
        return _exhaustiveCheck;
    }
}

makeDateExample5(1, 2, 3);
makeDateExample5(1);
makeDateExample5({ kind: 'timestamp', timestamp: 12345678 });
makeDateExample5({ kind: 'monthDayYear', month: 1, day: 2, year: 3 });