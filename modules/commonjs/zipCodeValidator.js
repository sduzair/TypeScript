"use strict";
/**
 * @file Modules / CommonJS / Zip Code Validator
 * @description A simple CommonJS module that exports a class to validate zip codes.
 */
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (zipCode) {
        return zipCode.length === 5 && /^[0-9]+$/.test(zipCode);
    };
    return ZipCodeValidator;
}());
var words = ["hello", "world"];
module.exports = { ZipCodeValidator: ZipCodeValidator, words: words };
