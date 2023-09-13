type Animal = {
    name: string;
};

type Dog = Animal & {
    breed: string;
};

type Cat = Animal & {
    color: string;
};

const animals: (Animal | Dog | Cat)[] = [
    { name: 'Buddy' },
    { name: 'Whiskers' },
    { name: 'Max', breed: 'German Shepherd' },
    { name: 'Mittens', color: 'Calico' },
];

// Filter only instances of Animal
const onlyAnimals: Animal[] = animals.filter((animal) => {
    return !('breed' in animal || 'color' in animal);
});

console.log(onlyAnimals);
