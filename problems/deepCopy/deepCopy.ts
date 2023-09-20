function deepEquals(value1: unknown, value2: unknown) {
    // Handling (primitive, primitive) only
    if (typeof value1 !== 'object' && typeof value2 !== 'object') {
        return value1 === value2;
    }

    // Handling (primitive, object) and (object, primitive)
    if (typeof (value1) !== typeof (value2)) return false;

    assert(typeof value1 === 'object' && typeof value2 === 'object');

    //Handling (object, object) where either object can be null
    if (!value1 || !value2) {   //* edge case 1
        return !value1 && !value2 ? true : false;
    }

    // Handling (object, object) where object is array
    if (Array.isArray(value1) && Array.isArray(value2)) {
        if (value1.length !== value2.length) return false;

        for (let i = 0; i < value1.length; i++) {
            if (!deepEquals(value1[i], value2[i])) return false;
        }

        return true;
    }

    //Handling (object, object) where either object can be array but not both
    if (Array.isArray(value1) || Array.isArray(value2)) return false;   //* edge case 2


    //Handling (object, object) where object is actual object
    const value1Keys = Object.keys(value1);
    const value2Keys = Object.entries(value2);
    if (value1Keys.length !== value2Keys.length) return false;

    for (const key in value1) {
        if (!(key in value2)) return false;     //* edge case 3
        if (!deepEquals(value1[key as keyof typeof value1], value2[key as keyof typeof value2])) return false;
    }

    return true;
}

console.log("True:");
console.log(deepEquals({}, {}));
console.log(deepEquals([], []));
console.log(deepEquals([1, 4, 8], [1, 4, 8]));
console.log(deepEquals([1, [4, 6], 8], [1, [4, 6], 8]));
console.log(deepEquals({ b: 3 }, { b: 3 }));
console.log(deepEquals({ b: 4, obj: { a: 9 } }, { b: 4, obj: { a: 9 } }));
console.log(deepEquals({ b: 4, array: [5], obj: { a: 9 } }, { b: 4, array: [5], obj: { a: 9 } }));
//* edge case 1 (typeof null === 'object')
console.log(deepEquals(null, null));


console.log("\nFalse:");
console.log(deepEquals([1, 4, 8], [2, 4, 8]));
console.log(deepEquals(NaN, NaN));
console.log(deepEquals(9, 99));
console.log(deepEquals({}, { b: 3 }));
console.log(deepEquals({}, null));
console.log(deepEquals({ b: 4 }, { b: 3 }));
console.log(deepEquals({ b: 4, a: 5 }, { b: 3, a: 5 }));
console.log(deepEquals({ b: 4, obj: { a: 9 } }, { b: 3, obj: { a: 9 } }));
//* edge case 2 (typeof [] === 'object')
console.log(deepEquals({}, []));
console.log(deepEquals({ g: 3 }, ['asdf', 'sdfg']));
//* edge case 3
console.log(deepEquals({ c: undefined, a: 5 }, { b: 3, a: 5 }));




function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new Error(msg);
    }
}