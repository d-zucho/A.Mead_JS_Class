//** Constructor Function */
const Person = function (fName, lName, age, likes) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
  this.likes = likes;
};

// shared method
Person.prototype.getBio = function () {
  let bio = `${this.fName} is ${this.age} years old.`;

  this.likes.forEach((like) => {
    // MUST me arrow property V
    // ! --- We need to use arrow function here since
    // ! --- it has no 'this' binded to it like regular functions
    bio += ` ${this.fName} likes ${like}.`;
  });

  return bio;
};

// can also use arguements in prototype functions to set/change attributes

//change name function
Person.prototype.setName = function (fullName) {
  const names = fullName.split(' ');
  this.fName = names[0];
  this.lName = names[1];
};

const me = new Person('Danny', 'Libor', 29, ['coding', 'comics', 'writing']);
console.log(me.getBio());

const person2 = new Person('Luke', 'Shae', 12);

me.setName('Nick Bergright');
console.log(me.getBio());
