/**
 * @file Classes / Class Expressions    
 * @description Class expressions are another way to define a class.
 */

// Example
const classExpression = class <T> {
    constructor(public readonly name: T) { }
}

const classExpressionInstance = new classExpression<string>('John');