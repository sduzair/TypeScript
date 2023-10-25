/**
 * @file Modules / ESM / Types / Import Type
 * @description Importing types with import type syntax.
 */
import type { Cat, Dog } from "./typesExport";
//            ^?

const cat: Cat = {
    breed: "Siamese",
    yearOfBirth: 2019
};

const dog: Dog = {
    breed: ["Pug", "Chihuahua"],
    yearOfBirth: 2015
};