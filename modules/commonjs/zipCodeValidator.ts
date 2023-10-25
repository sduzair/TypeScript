/**
 * @file Modules / CommonJS / Zip Code Validator
 * @description A simple CommonJS module that exports a class to validate zip codes.
 */
class ZipCodeValidator {
    isAcceptable(zipCode: string) {
        return zipCode.length === 5 && /^[0-9]+$/.test(zipCode);
    }
}

const words = ["hello", "world"];

export = { ZipCodeValidator, words };