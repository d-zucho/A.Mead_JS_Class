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

  set fullName(fullName) {
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

  getBio() {
    if (this.grade >= 70) {
      return `${this.fName} is passing the class. Great job!`;
    } else {
      return `${this.fName} is failing the class. Need more effort`;
    }
  }

  updateGrade(points) {
    this.grade = points + this.grade;
  }
}

const me = new Student('Danny', 'Libor', 29, 87);
me.fullName = 'James Bond';
console.log(me.getBio());

me.updateGrade(-29);
console.log(me.getBio());
