/**
 * @description This file contains examples of immutable array methods.
 * Immutable methods do not modify the original array, instead they return a new array.
 */

const nums = [2, 1, 3, 4];

// Newer

// .toSorted
const sorted = nums.toSorted();
console.log("🚀 ~ nums:", nums)
console.log("🚀 ~ sorted:", sorted)

// .toReversed
const reversed = nums.toReversed();
console.log("🚀 ~ nums:", nums)
console.log("🚀 ~ reversed:", reversed)

// Older

// Example of .map() method
const squares = nums.map(number => number * number);
console.log("🚀 ~ nums:", nums)
console.log("🚀 ~ squares:", squares)

// Example of .filter() method
const oddNumbers = nums.filter(number => number % 2 !== 0);
console.log("🚀 ~ nums:", nums)
console.log("🚀 ~ oddNumbers:", oddNumbers)

// Example of .reduce() method
const sum = nums.reduce((total, number) => [...total, total[total.length - 1] ? total[total.length - 1] as number + number : 0 + number], Array.of());
console.log("🚀 ~ nums:", nums)
console.log("🚀 ~ sum:", sum)
