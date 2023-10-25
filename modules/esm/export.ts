/**
 * @file Modules / ESM / Export
 * @description Exporting a default value and a named value to demonstrate ESM import syntax.
 */
export const pi = Math.PI;

export default class RandomNumberGenerator {
    generate() {
        return Math.random();
    }
}