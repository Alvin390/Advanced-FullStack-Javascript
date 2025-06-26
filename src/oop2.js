class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am in grade ${this.grade}.`);
  }

  promote() {
    this.grade++;
    console.log(`${this.name} has been promoted to grade ${this.grade}.`);
  }
}

// Example usage
const student1 = new Student("Alice", 5);
student1.introduce();
student1.promote()