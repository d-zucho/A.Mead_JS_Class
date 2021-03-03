//** --- NEW Class Syntax --- */

class PersonClass {
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

const myPerson = new PersonClass('Danny', 'Libor', 29, ['Tv', 'Comics']);
console.log(myPerson.getBio());

// //** OLD SYNTAX - Constructor Function */
// const Person = function (fName, lName, age, likes) {
//   this.fName = fName;
//   this.lName = lName;
//   this.age = age;
//   this.likes = likes;
// };

// // shared method
// Person.prototype.getBio = function () {
//   let bio = `${this.fName} is ${this.age} years old.`;

//   this.likes.forEach((like) => {
//     // MUST me arrow property V
//     // ! --- We need to use arrow function here since
//     // ! --- it has no 'this' binded to it like regular functions
//     bio += ` ${this.fName} likes ${like}.`;
//   });

//   return bio;
// };

// // can also use arguements in prototype functions to set/change attributes

// //change name function
// Person.prototype.setName = function (fullName) {
//   const names = fullName.split(' ');
//   this.fName = names[0];
//   this.lName = names[1];
// };

// const me = new Person('Danny', 'Libor', 29, ['coding', 'comics', 'writing']);
// console.log(me.getBio());

// const person2 = new Person('Luke', 'Shae', 12);

// me.setName('Nick Bergright');
// console.log(me.getBio());
