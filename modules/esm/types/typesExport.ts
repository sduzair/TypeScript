/**
 * @file Modules / ESM / Types / Export Types
 * @description Exporting types to demonstrate ESM import syntax for types.
 */
export type Cat = {
    breed: string;
    yearOfBirth: number;
};

export interface Dog {
    breed: string[];
    yearOfBirth: number;
}

export function createCatName(cat: Cat): string {
    return cat.breed;
}