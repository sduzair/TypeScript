/**
 * @file Modules / ESM / Types / Types Import Inline
 * @description Importing types inline.
 */
import { createCatName, type Dog, type Cat } from "./typesExport";

const cat: Cat = {
    breed: "Siamese",
    yearOfBirth: 2019
};

const dog: Dog = {
    breed: ["Pug", "Chihuahua"],
    yearOfBirth: 2015
};

const catName = createCatName(cat);