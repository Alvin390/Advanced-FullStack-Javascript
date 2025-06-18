let temperature = 9;

if (temperature>=30) {
    console.log("It's a hot day");
}
else if (temperature>=20) {
    console.log("It's a warm day");
}
else if (temperature>=10) {
    console.log("It's a cool day");
}
else {
    console.log("It's a cold day");
}

function odd_or_even(number) {
    if (number % 2 === 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
}

odd_or_even(1032)

function vote_eligible(age) {
  if (120<age>=18){
    console.log("You are eligible to Vote")
  }
  else if (age>=120){
    console.log("Invalid Entry")
  }
  else if (age<=0){
    console.log ("Invalid Entry")
  }
  else{
    console.log("You are not eligible to Vote")
  }
}

vote_eligible(150)