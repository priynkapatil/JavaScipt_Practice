let value = 3
let negval = -value

console.log(negval) // -3

let str1 = 'hello'
let str2 = 'world'
let str3 = str1 + str2
console.log(str3) //helloworld;

console.log("1" + 2) // 12
console.log(1 + "2") // 12

// If both values are numbers, + does math (adds them).
// If any one value is a string, + turns everything into a string and joins them (concatenation).
// And this works left to right, one step at a time.

console.log("1" + 2 + 2) // 122
console.log(1 + 1 + '2') // 22
console.log(1 + "2" + 1) //121

// new 

console.log(true) //true
console.log(+true) //1            The unary + converts true to a number → 1
console.log(+"") //0              Empty string gets converted to number → 0
console.log(+"hello") //NaN.      "hello" is not a number, and cannot be converted → NaN (Not a Number)   
console.log(+"33") // 33.        String "33" contains a valid number → converted to number 33
console.log(+33) //33            Already a number → unary + does nothing → still 33


//new

let num1 , num2, num3
num1 = num2 = num3 = 2+2
console.table([num1,num2,num3])  // 4 assign to all num

// prefix and post fix

let gameValue = 100
const case1 = ++gameValue
const case2 = gameValue++
console.log(case1, case2)



