// Practice 2 with new `switch` that has type narrowing
function deepEquals(arg0: unknown, arg1: unknown) {
  // console.log("\n", arg0, arg1);
  switch (true) {
    case typeof arg0 !== "object" && typeof arg1 !== "object":
      return arg0 === arg1;
    case typeof arg0 !== typeof arg1:
      return false;
    case arg0 == null || arg1 == null:
      return arg0 === arg1;
    case typeof arg0 === "object" && typeof arg1 === "object":
      // deals with arrays too
      const entriesArg0 = Object.entries(arg0);
      const entriesArg1 = Object.entries(arg1);
      // length check
      if (entriesArg0.length !== entriesArg1.length) return false;
      // entries check
      for (let i = 0; i < entriesArg0.length; i++) {
        if (
          !deepEquals(
            entriesArg0[i][1],
            (arg1 as { [key: string]: any })[entriesArg0[i][0]]
          )
        )
          return false;
      }
      return true;
    default:
      throw Error("Unhandled case!");
  }
}

// Tests
console.log("Primitives");
console.log(deepEquals(4, 4), "Expect:", true);
console.log(deepEquals(4, 5), "Expect:", false);
console.log(deepEquals("string", "string"), "Expect:", true);
console.log(deepEquals("string", "ing"), "Expect:", false);
console.log(deepEquals(4, undefined), "Expect:", false);
console.log(deepEquals(4, null), "Expect:", false);

console.log("\nObjects");
console.log(deepEquals(null, null), "Expect:", true);
console.log(deepEquals(undefined, undefined), "Expect:", true);
console.log(deepEquals(null, undefined), "Expect:", false);
console.log(deepEquals({ name: "Jon Doe" }, null), "Expect:", false);
console.log(deepEquals({ name: "Jon Doe" }, undefined), "Expect:", false);
console.log(deepEquals({ name: "Jon Doe" }, 4), "Expect:", false);
console.log(deepEquals([1], [1]), "Expect", true);
console.log(deepEquals([2], [1]), "Expect", false);
console.log(deepEquals([1, [1]], [1, [2]]), "Expect", false);
console.log(deepEquals([2], 3), "Expect", false);
console.log(deepEquals([1, [1]], [1, ["sadf2"]]), "Expect", false);
console.log(deepEquals([1, [1]], [1, ["1"]]), "Expect", false);

console.log(
  deepEquals({ name: "Jon Doe" }, { name: "Jon Doe" }),
  "Expect:",
  true
);
console.log(deepEquals({ name: "Jon Doe" }, { name: "Sam" }), "Expect:", false);
console.log(
  deepEquals({ name: "Jon Doe" }, { name: "Jon Doe", age: 23 }),
  "Expect:",
  false
);
const user = {
  name: "Jon Doe",
  birth: {
    date: new Date(1993, 5, 11),
    location: "Canada",
  },
};
console.log(deepEquals(user, { ...user, name: "Sam" }), "Expect:", false);
console.log(deepEquals(user, { ...user, birth: "Sam" }), "Expect:", false);
console.log(
  deepEquals(user, { ...user, birth: { ...user.birth, location: "America" } }),
  "Expect:",
  false
);
console.log(
  deepEquals(user, { ...user, birth: { ...user.birth, location: "Canada" } }),
  "Expect:",
  true
);
console.log(
  deepEquals(
    { name: "Jon Doe", logins: [1, 2, 3] },
    { name: "Jon Doe", logins: [1, 2, 3] }
  ),
  "Expect:",
  true
);
console.log(
  deepEquals(
    { name: "Jon Doe", logins: [1, 2, 3] },
    { name: "Jon Doe", logins: [2, 1, 3] }
  ),
  "Expect:",
  false
);
console.log(
  deepEquals(
    { name: "Jon Doe", logins: [1, 2, 3] },
    { name: "Jon Doe", age: 23 }
  ),
  "Expect:",
  false
);
console.log(
  deepEquals(
    { name: "Jon Doe", logins: [1, 2, 3] },
    { logins: [1, 2, 3], name: "Jon Doe" }
  ),
  "Expect:",
  true
);
console.log(
  deepEquals(
    { name: "Jon Doe", logins: [1, 2, 3] },
    { logins: [2, 1, 3], name: "Jon Doe" }
  ),
  "Expect:",
  false
);