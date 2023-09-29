/**
 * @file Type Manipulation / Types - Immediately Indexed Mapped Type
 * @description The index at the end of the mapped type get a union of all the property types in the mapped type.
 */

// Example
type SomeObject = {
    a: string,
    b: number,
};

/**
 * { key: "a"; } | { key: "b"; }
 */
type ImmediatelyIndexedMappedType = {
    //   ^?
    [K in keyof SomeObject]: {
        'key': K,
    }
}[keyof SomeObject];