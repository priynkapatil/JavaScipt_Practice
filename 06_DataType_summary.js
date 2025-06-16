// Primitive datatype (7 categore) is call by value
// string,boolean,number,null,undefined, symbol, bigint

// JavaScript is a dynamically typed language ✅
let value = 42;      // value is a number
value = "hello";     // now it's a string
value = true;        // now it's a boolean
let bigNumber = 123233445656565656565n // bigint

// refrence type (non-primitive) 
// array,objects,function

let numbers = [1, 2, 3];
let newNumbers = numbers;

newNumbers.push(4);

console.log(numbers); // [1, 2, 3, 4] — same reference


//object

let user = { name: "Priya" };
let copy = user;

copy.name = "Patil";

console.log(user.name); // "Patil" — because `user` and `copy` point to the same object

//✅ Primitive Types (Call by Value)

// | Value                  | Code Example                          | `typeof` result  |
// | ---------------------- | ------------------------------------- | ---------------- |
// | **String**             | `typeof "hello"`                      | `"string"`       |
// | **Number**             | `typeof 42`                           | `"number"`       |
// | **Boolean**            | `typeof true`                         | `"boolean"`      |
// | **Undefined**          | `typeof undefined`                    | `"undefined"`    |
// | **Null** (⚠️ odd case) | `typeof null`                         | `"object"` ← bug |
// | **Symbol**             | `typeof Symbol("id")`                 | `"symbol"`       |
// | **BigInt**             | `typeof 123n` or `typeof BigInt(123)` | `"bigint"`       |
//ℹ️ Note: typeof null === "object" is a known bug in JS — kept for legacy reasons.

// ✅ Reference Types (Call by Reference)

// | Value Type   | Code Example               | `typeof` result                |
// | ------------ | -------------------------- | ------------------------------ |
// | **Object**   | `typeof { name: "Priya" }` | `"object"`                     |
// | **Array**    | `typeof [1, 2, 3]`         | `"object"` ← yes, still object |
// | **Function** | `typeof function() {}`     | `"function"`                   |
// | **Date**     | `typeof new Date()`        | `"object"`                     |
// | **RegExp**   | `typeof /abc/`             | `"object"`                     |
