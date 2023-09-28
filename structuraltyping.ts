/**
 * @file Structural Typing
 * @desc In TypeScript, Structural Typing makes implicit relation between two types based 
 * solely on their shape/stucture. This is different from nominal typing, as in Java/C#, where two
 * types are considered related if they have the same name or come from the same declaration.
 */
interface Type1 {
    x: string,
    y: string,
}

interface Type2 {
    x: string,
    y: string,
    z: string,
}

const objOfType2: Type2 = {
    x: "asf",
    y: "asfd",
    z: "asdf",
}

function TakesType1(param: Type1): void {
    console.log("Hello World!");
}
/**
 * The function TakesType1 takes an object of type Type1, here we are passing an object of type Type2
 * This is possible because Type2 has all the properties of Type1 and hence is a subtype of Type1
 */
TakesType1(objOfType2);