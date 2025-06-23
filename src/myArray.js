// I am handling arrays today in class

const fruits = ["apple", "banana", "cherry", "date"];

const scores = [10, 20, 30, 40, 50];

const mixedbag= ["Kenya", 123, true, null];

console.log(`My favourite fruit is ${fruits[1]}]`);// Accessing the second element in the array
fruits[1] = "orange";
console.log(`My favourite fruit is now ${fruits[1]}`);// Accessing the second element in the array after modification
fruits.push("pineapples");
console.log(fruits);

fruits.pop("pineapples");// Removes the last element in the array
console.log(fruits);

console.log ("for each... ")
scores.forEach((scores,index) => {
    console.log(`The score at index ${index} is ${scores}`);
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log ('map...')

const double= numbers.map((number) =>number*2); {
    console.log(double);
}

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const even=number2.filter((number)=> number%2===0);
    console.log(`Even numbers in ${number2} are ${even}`);