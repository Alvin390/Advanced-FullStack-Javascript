

console.log("counting numbers from 0 to 5")

for (let i = 5; i <= 15; i+=2) {
    console.log(i);
}

for (let i = 10; i >= 0; i-=1) {
    console.log(i);
}

console.log("Looping through an array")

const myColors = ["red", "green", "blue", "yellow", "purple"];

for (let i=0; i <=myColors.length; i++) {
  console.log("The color at index", i, "is ", myColors[i]);
}

const myNumbers = [4, -8, 15, 12, 23, 652, 100, -3, 52, 71, 99, 0];
myNumbers.sort((a,b)=>a-b)
console.log(myNumbers);



for (let m=0; m<myNumbers.length; m++) {
  for (let n=0; n<myNumbers.length -1 -m; n++) {
    if (myNumbers[n] > myNumbers[n+1]) {
      const temp = myNumbers[n]
      myNumbers[n] = myNumbers[n+1];
      myNumbers[n+1] = temp;
    }
  }
}
console.log(myNumbers)





