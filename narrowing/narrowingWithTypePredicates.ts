//? TYPE PREDICATE NARROWING ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
    // return false;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        return animal.swim();
    } else {
        return animal.fly();
    }
}

/*
    - The isFish function is a type predicate because its return type is a type predicate type: pet is Fish.
    - With the return type 'pet is Fish' we are not relying on the compiler to infer the type of the pet parameter.
*/

// Inference Attempt 1
function isFishUnsuccessfullTypeInference(pet: Fish | Bird) {
    if ("swim" in pet) {
        pet     // pet: Fish
        return true;
    }
    return false;
}

function moveUnsuccessfullTypeInference(animal: Fish | Bird) {
    if (isFishUnsuccessfullTypeInference(animal)) {
        return animal.swim();   // TS unable to infer type of animal as Fish
    } else {
        return animal.fly();
    }
}

// Inference Attempt 2 - without type predicate
function moveSuccessfullTypeInference(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();   // TS unable to infer type of animal as Fish
    } else {
        return animal.fly();
    }
}