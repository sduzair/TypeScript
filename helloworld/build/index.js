"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addNumbers_1 = require("./addNumbers");
const message = "Hello World";
function printHelloWorld(firstName, lastName) {
    console.log("Hello World");
    console.log("My name is " + firstName + " " + lastName);
}
printHelloWorld("John", "Doe");
console.log(message, (0, addNumbers_1.addNumbers)(1, 2));
