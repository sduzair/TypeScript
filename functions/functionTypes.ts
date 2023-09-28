type GreetType = {
    (): void;
};

let greet: GreetType = () => console.log("Hello!");

const greetWithName = (name: string) => console.log(`Hello ${name}`);

// greet = greetWithName; //! Error: Type '(name: string) => void' is not assignable to type 'GreetType'.

const greetWithOpionalName = (name?: string) => console.log("Hello" + name !== undefined ? ` ${name}` : "" + "!");

/**
 * Type '(name?: string) => void' is assignable to type 'GreetType'.
 */
greet = greetWithOpionalName;
