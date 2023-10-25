/**
 * @file Modules / CommonJS / Import
 * @description Importing a CommonJS module.
 */
import zip = require("./zipCodeValidator");

const myValidator = new zip.ZipCodeValidator();
myValidator.isAcceptable("12345"); // true

const words = zip.words;
console.log(words); // ["hello", "world"]