/**
 * @description Generators iterate over values sequentially processing them lazily.
 */

function* numbers(start = 1) {
  while (true) {
    yield start;
    start++;
  }
}

// for (const val of numbers()) {
//   console.log(val);
// }

function* filterGen<T>(generator: Iterator<T>, predicate: { (e: T): boolean }) {
  let val = generator.next();
  while (val.done !== true) {
    if (predicate(val.value)) { yield val.value; }
    val = generator.next();
  }
}

// for (let val of filterGen([1, 2, 3, 4, 5, 6, 7, 8, 9].values(), (e) => { return e % 2 == 0 })) {
//   console.log("🚀 ~ val:", val)
// }

// for (let val of filterGen(numbers(), e => e % 2 === 1)) {
//   console.log("🚀 ~ val:", val)
// }

function* mapGen<T>(iterator: Iterator<T>, lambda: { (e: T): unknown }) {
  let val = iterator.next();
  while (val.done !== true) {
    yield lambda(val.value);
    val = iterator.next();
  }
}

const evenNums = filterGen(numbers(), e => e % 2 === 0);
const evenNumsMapped = mapGen(evenNums, e => ({ value: e, isEven: true }))

for (let val of evenNumsMapped) {
  console.log("🚀 ~ val:", val)
}
