/**
 * @file Classes / Type-only Field Declarations
 * @description When target >= ES2022 or useDefineForClassFields is true, class fields are initialized after the parent class constructor completes, overwriting any value set by the parent class. This can be a problem when you only want to re-declare a more accurate type for an inherited field. To handle these cases, you can write declare to indicate to TypeScript that there should be no runtime effect for this field declaration.
 */

interface Animal {
    dateOfBirth: any;
}

interface Dog extends Animal {
    breed: any;
}

class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
        this.resident = animal;
    }
}

class DogHouse extends AnimalHouse {
    constructor(dog: Dog) {
        super(dog);
    }
}

const dog: Dog = { breed: "Poodle", dateOfBirth: "5/5/23" };
const dogHouse = new DogHouse(dog);
// console.log(dogHouse.resident.breed);    //! Error: Property 'breed' does not exist on type 'Animal'. (no runtime error)

/**
 * Using Type-only Field Declaration for property `resident`.
 * Does not emit JavaScript code.
 * Only ensures the types are correct so that `breed` property can be accessed.
 */
class DogHouseWithDog extends AnimalHouse {
    declare resident: Dog;  //* Type-only Field Declaration
    constructor(dog: Dog) {
        super(dog);
    }
}

const realDog: Dog = { breed: "Poodle", dateOfBirth: "5/5/23" };
const dogHouseWithDog = new DogHouseWithDog(realDog);
console.log(dogHouseWithDog.resident.breed);