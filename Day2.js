//Act:1 => Arithmetic operators

// Task1: Wap to add two numbers and log a program to console
let a = 5;
let b = 4;
console.log(a + b); // Outputs: 9

// Task2: Wap to subtract two numbers and log a program to console
let a1 = 15;
let b1 = 4; // Changed variable name to avoid re-declaration error
console.log(a1 - b1); // Outputs: 11

// Task3: Wap to multiply two numbers and log a program to console
var c = 15;
c2 = 4;
console.log(c * c2); // Outputs: 60
// Task4: Wap to divide two numbers and log a program to console
let y = 15;
let z = 3;
console.log(y / z); // Outputs: 5

// Task5: Wap to find a remainder when one number is divided by another and log the result to the console
let x = 15;
let y1 = 4; 
console.log(x % y1); // Outputs: 3

// Assignment Operators

// Use the += operator to add a number to a variable and log the result to the console
let a2 = 5;
let b2 = 6; 
console.log(a2 += b2); // Outputs: 11

// Use the -= operator to subtract a number from a variable and log the result to the console
let b3 = 5;
let a3 = 6; 
console.log(b3 -= a3); // Outputs: -1

// Act3:Comparision Operator
 //Task 8: write a program to compare two number using >  and< and log the result to the console.
 let num1 = 10;
 let num2 = 20;
 if (num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
 }else{
    console.log(`${num1} is not greater than ${num2}`);
 }

 if (num1 < num2){
    console.log(`${num1} is less than ${num2}`);
 }else
 console.log(`${num1} is not less than ${num2}`);

//Task 9: write a program to compare two number using >=  and <= and log the result to the console.
let sum1 = 15;
let sum2 = 15;

// Using greater than or equal to (>=)
if (sum1 >= sum2) {
    console.log(`${sum1} is greater than or equal to ${sum2}`);
} else {
    console.log(`${sum1} is not greater than or equal to ${sum2}`);
}

// Using less than or equal to (<=)
if (sum1 <= sum2) {
    console.log(`${sum1} is less than or equal to ${sum2}`);
} else {
    console.log(`${sum1} is not less than or equal to ${sum2}`);
}
//Task 10 : write a program to compare two number using ==  and === and log the result to the console.
//using ==
let saj = 10;
rah = 15;

if (saj == rah){
    console.log(`${saj} is equal to ${rah}`);
}else
console.log (`${saj} is not equal to ${rah}`);

//using === strict equality

let strict = 15;
//sam ="15";
sam = 15;
if (strict === sam){
    console.log(`${strict} is equal to ${sam}`);
}else
console.log (`${strict} is not equal to ${sam}`);

console.log(typeof sam);

//Act=4:Logical Operator
//Task11: wap that uses the && operator to combine two conditions and log the result to the console.

let com = 10;
let cum = 20;

// Define two conditions
let condition1 = com < cum; // true
let condition2 = com > 5; // true

// Combine conditions using the && operator
if (condition1 && condition2) {
    console.log("Both conditions are true.");
} else {
    console.log("One or both conditions are false.");
}

//Task11: wap that uses the || operator to combine two conditions and log the result to the console.

let value1 = 10;
let value2 = 20;

// Define two conditions
let isValue1GreaterThan15 = value1 > 15; // false
let isValue2GreaterThan15 = value2 > 15; // true

// Combine conditions using the || operator
if (isValue1GreaterThan15 || isValue2GreaterThan15) {
    console.log("At least one of the conditions is true.");
} else {
    console.log("Both conditions are false.");
}

//Task11: wap that uses the !(logical NOT) operator to negate a conditions and log the result to the console.

let number = 10;

// Define a condition
let isGreaterThan5 = number > 5; // true

// Negate the condition using the ! operator
let isNotGreaterThan5 = !isGreaterThan5;

// Log the results to the console
console.log(`Is ${number} greater than 5? ${isGreaterThan5}`); // Outputs: true
console.log(`Is ${number} not greater than 5? ${isNotGreaterThan5}`); // Outputs: false


