/**
 * @file Classes / this / this at runtime in Classes
 * @description The value of `this` is determined by how a function/method is called (runtime binding). It may be different each time the function is called. This means that the value of `this` in a class method is not always the instance of the class.
 */

/**
 * Example 1: `this` at runtime in Classes
 * - Shows how the value of `this` may not be the instance of the class.
 */
class MyClass {
    name = "MyClass";

    getName() {
        return this.name;
    }
}

const myClassObj = new MyClass();
console.log(myClassObj.getName()); // Prints "MyClass"

const obj = {
    name: "obj",
    getNameObjContext: myClassObj.getName,
};
console.log(obj.getNameObjContext());   // Prints "obj" not "MyClass"

const getNameGlobalContext = myClassObj.getName;
console.log(getNameGlobalContext());    //! Runtime Error: Cannot read properties of undefined

console.log("--------------------------------------------------");

/**
 * Example 2: Arrow functions and `this` at runtime in Classes
 * - Shows how arrow functions do not bind their own `this`. They retain the value of `this` from the enclosing lexical context.
 * - Trade-offs of using arrow functions:
 *   - More memory usage as each instance of the class will have its own copy of the arrow function.
 *   - The derived class cannot use super.methodName() to call the parent class method.
 */
class MyClassWithArrowFunction {
    name = "MyClass2";

    getName = () => {
        return this.name;
    }
}

const myClassObj2 = new MyClassWithArrowFunction();
console.log(myClassObj2.getName()); // Prints "MyClass2"

const obj2 = {
    name: "obj2",
    getNameObjContext: myClassObj2.getName,
};
console.log(obj2.getNameObjContext());   // Prints "MyClass2"

const getNameGlobalContext2 = myClassObj2.getName;
console.log(getNameGlobalContext2());    // Prints "MyClass2"

console.log("--------------------------------------------------");

/**
 * Example 3: `this` parameter in methods/functions
 * - Used to statically enforce that a method/function is called with the correct `this` context, here the instance of the class.
 */
class MyClassWithThisParameter {
    name = "MyClass3";

    getName(this: MyClassWithThisParameter) {
        return this.name;
    }
}

const myClassObj3 = new MyClassWithThisParameter();
console.log(myClassObj3.getName()); // Prints "MyClass3"

const getNameGlobalContext3 = myClassObj3.getName;
// console.log(getNameGlobalContext3());    //! Runtime and TS Error: Cannot read properties of undefined and The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClassWithThisParameter'.`