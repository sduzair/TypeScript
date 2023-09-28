/**
 * @file Type Manipulation / Template Literal Types
 * @desc TypeScript 4.1 introduced Template Literal Types, which permit the construction of types from Template Literal Strings.
 */

/**
 * Example 1
 * Defines a type `World` as a string literal "world".
 * Defines a type `Greeting` as a Template Literal Type that concatenates the string literal "hello " with the type `World`.
 */
type World = "world";
type Greeting = `hello ${World}`;

/**
 * Example 2
 * Defines two union types `EmailLocaleIDs` and `FooterLocaleIDs` as string literals.
 * Defines a type `AllLocaleIDs` as a template literal type that concatenates the union of `EmailLocaleIDs` and `FooterLocaleIDs` with the string literal "_id".
 */
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

/**
 * Example 3
 * Defines a type `PropEventSource` as a generic type that takes an object type `T` and returns an object with an `on` method.
 * The `on` method takes two parameters: an event name and a callback function.
 * The event name is a template literal type that concatenates the keys of `T` with the string literal "Changed".
 * Demonstrates that the `on` method only accepts event names that are derived from the keys of `passedObject` with the string literal "Changed".
 */
type PropEventSource<T> = {
    on(event: `${keyof T & string}Changed`, callback: (newValue: any) => void): void;
};

declare function makeWatchedObject<T>(obj: T): PropEventSource<T>;

const passedObject = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
};

const person = makeWatchedObject(passedObject);

person.on("firstNameChanged", () => { });
// person.on("firstName", () => { });   //! Error: Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
// person.on("frstNameChanged", () => { });     //! Error: Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.

/**
 * Example 4
 * In the previous example, we have not utilized the type information of the parameter type to accept valid type for newValue.
 */
type PropEventSourceWithCallbackParamType<T> = {
    on<U extends keyof T & string>(event: `${U}Changed`, callback: (newValue: T[U]) => void): void;
};

declare function makeWatchedObjectWithCallbackParamType<T>(obj: T): PropEventSourceWithCallbackParamType<T>;

const person2 = makeWatchedObjectWithCallbackParamType(passedObject);

person2.on("firstNameChanged", (newValue) => console.log(newValue));