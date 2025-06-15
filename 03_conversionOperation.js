
let score = 33
let score1 = "33"

console.log(typeof score)
console.log(typeof score1)

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

// what is if value 33abc

let score3 = Number('45aa')
console.log(typeof score3) // Number
console.log( score3) // output - Nan

let score4 = Number(null) 
console.log(typeof score4) // number
console.log(score4) // 0

let score5 = Number(undefined) 
console.log("in case of undefined " , typeof score5) // number
console.log(score5) // NaN

let score6 = Number(false) 
console.log("in case of boolean " ,typeof score6) // number
console.log(score6) // 0 if true then 1

let score7 = Number('hello') 
console.log("in case of stirng " ,typeof score7) // number
console.log(score7) // NaN

// when number convert to number  it properly connected 

// for boolean value
const booleanValue = 10
console.log('boolean value to convert to boolean type',Boolean(booleanValue)) // true

const booleanValue1 = ""
console.log('boolean value to convert to boolean type. for empty string',Boolean(booleanValue1)) // false

const booleanValue3 = 'hello'
console.log('boolean value to convert to boolean type string',Boolean(booleanValue)) // true


// for stirng

const stirngVal = String(50)
console.log('string',stirngVal) //50
console.log('type of 50',typeof stirngVal)


