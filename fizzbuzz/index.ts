// for (let i = 0; i < 100; i++) {
//     console.log(`num: ${i}`);

//     if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0)
//         console.log("FizzBuzzBazz");
//     else if (i % 3 === 0 && i % 5 === 0)
//         console.log("FizzBuzz");
//     else if (i % 5 === 0 && i % 7 === 0)
//         console.log("BuzzBazz");
//     else if (i % 3 === 0 && i % 7 === 0)
//         console.log("FizzBazz");
//     else if (i % 3 === 0)
//         console.log("Fizz");
//     else if (i % 5 === 0)
//         console.log("Buzz");
//     else if (i % 7 === 0)
//         console.log("Bazz");
//     else
//         console.log(i);
//     console.log();
// }

const predicates: { [key: number]: string } = {
    3: "Fizz",
    5: "Buzz",
    7: "Bazz",
}

function fizzBuzz(num: number): string {
    let word = "";
    Object.keys(predicates).forEach((value) => {
        if (num % Number(value) === 0) {
            word += predicates[Number(value)];
        }
    })
    return word;
}

for (let i = 0; i < 100; i++) {
    const word = fizzBuzz(i);
    word.length > 0 ? console.log(word) : console.log(i);
}
