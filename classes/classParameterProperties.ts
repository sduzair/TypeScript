/**
 * @file Classes / Parameter Properties
 * @description Special syntax for declaring and initializing class members.
 */

// Example
class ParameterProperties {
    constructor(
        public readonly name: string,
        protected readonly age: number,
        private readonly height: number
    ) { }
}

const parameterProperties = new ParameterProperties('John', 25, 1.75);