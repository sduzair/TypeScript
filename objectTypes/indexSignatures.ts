//? INDEX SIGNATURES ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// Example 1
interface StringArrayOrDict {
    [index: number]: string;
}

const myArray: StringArrayOrDict = { 0: "Bob", 1: "Fred", "2": "John" };
const myArray2: StringArrayOrDict = ["Bob", "Fred"];    //* Also valid
console.log("Example 1");
console.log(myArray[1]);
console.log(myArray["1"]);  //* Indexing with a string is possible, but the string's value must be a number.
console.log(myArray2[1]);
console.log(myArray2["1"]);

// Example 2
interface Dict {
    [index: string]: string;
}

const myDict: Dict = { "a": "Bob", "b": "Fred", 8: "John" };
// const myArray3: Dict = ["Bob", "Fred"];    //! Error: Index signature for type string is missing in type 'string'. (index signature of number needed for arrays)
console.log("\nExample 2");
console.log(myDict["a"]);
console.log(myDict[8]);
console.log(myDict["8"]);

// Example 3
interface Dict2 {
    [index: string]: string | number;
    [index: number]: number;
}
const myDict2: Dict2 = { "a": "Bob", "b": "Fred", 8: 8 };
console.log("\nExample 3");
console.log(myDict2["a"]);
console.log(myDict2[8]);
console.log(myDict2["8"]);

// Example 4
// interface Dict3 {
//     [index: string]: string;
//     [index: number]: number;    //! Error: 'number' index type 'number' is not assignable to 'string' index type 'string'.
// }

/*
    - The type returned from a numeric indexer must be the same type or a subtype of the type returned from the string indexer.
    - This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object.
    - So the number idex type must be assignable to the string index type.
*/

// Example 5
// interface NumberDictionary {
//     [index: string]: number;
//     length: number;     //* OK
//     name: string;     //! Error: Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
// }

/*
    - String index signatures enforce that all properties match their return type.
    - This is because a string index declares that obj.property is also available as obj["property"].
*/

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;     //* OK, length is a number
    name: string;   //* OK, name is a string
}

// Example 6
// interface NumberOrStringDictionaryType2 {
//     [index: 'length' | 'name']: number | string;    //! Error
//     length: number;
//     name: string;
// }

/*
    - Only some types are allowed for index signature properties: string, number, symbol, template string patterns, and union types consisting only of these.
*/
