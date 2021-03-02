const students = [
  {
    name: 'Johan',
    age: 21,
  },
  {
    name: 'Danny',
    age: 29,
  },
  {
    name: 'Alex',
    age: 19,
  },
];

let bla = students.filter((student) => student.age > 20);

// console.log(bla);

/** ------------------- */

const products = [];
const product = products[0];

// if (product !== undefined) {
//   console.log('Product not found');
// } else {
//   console.log('Product found');
// }

// product !== undefined ? console.log('hello') : console.log('fail');

const myAge = 21;

myAge >= 21 ? console.log('Welcome in') : console.log('Not old enough!');
