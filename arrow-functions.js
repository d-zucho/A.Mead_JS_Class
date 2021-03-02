const people = [
  {
    name: 'Andrew',
    age: 27,
  },
  {
    name: 'Danny',
    age: 29,
  },
  {
    name: 'Brandon',
    age: 33,
  },
];

// filter through the list and log people under 30

//* regular method *//
// const under30 = people.filter(function (person) {
//   return person.age < 30;
// });

// console.log(under30);

//* Arrow functions *//

const under30 = people.filter((person) => person.age < 30);

console.log(under30);
