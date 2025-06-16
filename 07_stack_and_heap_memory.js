
// stack(Primitive) and heap(Non-Primitive)
// | Feature      | 🥞 **Stack**                    | 🧺 **Heap**                    |
// | ------------ | ------------------------------- | ------------------------------ |
// | Type of data | Simple, small data (primitives) | Complex data (objects, arrays) |
// | Speed        | Fast                            | Slower                         |
// | Memory size  | Small                           | Large                          |
// | Access       | Direct, organized               | Indirect (via reference)       |
// | Stores       | **Primitive types**             | **Reference types**            |

// in primitive it will create a copy and that copy value will change but it non-primitive it will directly point to refernce like there the value store

let a = 10; // 🥞 stored in stack
let b = a;
b = 20;

console.log(a); // 10 — a stays unchanged
console.log(b); // 20 — b have copy of a so it will not directly change a but change the copy of a

let person1 = { name: "Priya" }; // 🧺 object in heap
let person2 = person1;

person2.name = "Patil";

console.log(person1.name); // "Patil" — both point to the same object!
console.log(person2.name); // "Patil" — both point to the same object!
