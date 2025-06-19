function grading(grade){
  if (grade>100 || grade<0) {
    console.log("INVALID!")
    return;
  }
  if (grade>=0 && grade<=40){
    console.log("Your Points are ", grade ," and your grade is D, You Have Failed")
  }
  else if (grade<=60){
    console.log("Your Points are ", grade ," and your grade is C, Fair")
  }
  else if (grade<=79){
    console.log("Your points are ", grade ," and your grade is B, Good")
  }
  else if (grade>=80 && grade<=100){
    console.log("Your points are ", grade ," and your grade is A, Excellent")
  }
  else {
    console.log("INVALID!")
  }

}

grading(4)