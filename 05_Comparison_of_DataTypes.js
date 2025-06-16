// Normal
console.log(2 > 1)
console.log(2 < 1)
console.log(2 === 1)
console.log(2 !== 1)

// data type must be same
//When using relational operators like >, if the operands are of different types (e.g., string and number), JavaScript converts both to numbers before comparing.


console.log("2" > 1); // true
console.log("02" > 1) // true

// with null

console.log(null > 0); // false
console.log(null ==0);//false
// == does not convert null to a number.
// Instead, there's a special rule:
// null == undefined → true
// But null == 0 → false
// So this is false, because null only loosely equals undefined, not numbers.
console.log(null >=0); //true comparisons convert null to a number, treateing it as 0 thats why null >=0 is true

//undefined

console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined > 0); //false

// stickt check 
console.log("2"=== 2); // === compare datatype to


// always use clean code and avoid this type of conversion