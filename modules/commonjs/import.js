"use strict";
exports.__esModule = true;
/**
 * @file Modules / CommonJS / Import
 * @description Importing a CommonJS module.
 */
var zip = require("./zipCodeValidator");
var myValidator = new zip.ZipCodeValidator();
myValidator.isAcceptable("12345"); // true
var words = zip.words;
console.log(words); // ["hello", "world"]
