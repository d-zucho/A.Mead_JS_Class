//** --- NEW Class Syntax --- */

class Person {
  //* New Constructor Function //
  constructor(fName, lName, age, likes = []) {
    //properties
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.likes = likes;
  } // dont need coma here
  // methods
  getBio() {
    let bio = `${this.fName} is currently ${this.age} years old. `;

    this.likes.forEach((like) => (bio += `${this.fName} enjoys ${like}\n`));

    return bio;
  }

  setName(fullName) {
    const names = fullName.split(' ');
    const firstName = names[0];
    const lastName = names[1];
  }
}

class Employee extends Person {
  constructor(fName, lName, age, position, likes) {
    super(fName, lName, age, likes);
    this.position = position;
  }

  getBio() {
    // Andrew is a {position}
    return `${this.fName} is currently ${this.position}`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(fName, lName, age, grade, likes) {
    super(fName, lName, age, likes);
    this.grade = grade;
  }
}

const me = new Employee('Danny', 'Libor', 29, 'Unemployed');
console.log(me.getBio());
