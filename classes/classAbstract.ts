/**
 * @file Classes / Abstract
 * @description An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.
 * The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete.
 */

// Example 1
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
// const b = new Base();    //! Cannot create an instance of an abstract class.

// Example 2 - Derived classes must implement the abstract method
// class Derived extends Base {    //! Non-abstract class 'Derived' does not implement all abstract members of 'Base'
//   // forgot to do anything
// }