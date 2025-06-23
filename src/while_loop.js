// While Loop in JavaScript - Quick Notes
//
// Syntax:
// while (condition) {
//   // code
// }
//
// - Repeats as long as condition is true
// - Condition checked before each iteration
// - Use when number of iterations is unknown
//
// Common uses:
// - Wait for user input
// - Process data until done
// - Game or file reading loops
//
// Tips:
// - Always update the condition variable
// - Avoid infinite loops
// - Initialize variables before loop
// - Use clear variable names
//
// Debugging:
// - Use console.log to track values
// - Add a counter to prevent infinite loops


console.log("while loop");

let counter= 0
while (counter<=10){
  console.log(`while loop ${counter}`)
  console.log(counter++)
}

let counter2= 0
while (counter2<=50){
  console.log(`while loop ${counter2}`)
  console.log(counter2+=5)
}

// for.....of loop
// - for...of loop iterates over values of iterable objects (arrays, strings, etc.)
// - Syntax: for (const element of iterable) { ... }
// - Provides direct access to values without dealing with index
// - Works with any iterable object including Arrays, Strings, Maps, Sets
// - Simpler alternative to traditional for loops when you only need values
// - Cannot modify the original array during iteration (use traditional for loop instead)
// - More readable than forEach when you need to use async/await in the loop
// - Better performance than for...in loop for arrays

console.log("for...of loop through an array")
const fruits = ["apple", "banana", "cherry", "date"];

for (const fruit of fruits) {
  console.log(fruit);
}

console.log("for...of loop through a string")
const sentence = "The quick brown fox jumps over the lazy dog"
 for (const char of sentence) {
    console.log(char );
 }

 console.log("for...in loop through an object")

const person = {
   name: "John",
  age: 30,
  city: "New York"
}
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
