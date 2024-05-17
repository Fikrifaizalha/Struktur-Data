// Destructuring Object //

// const profile = {
//   firstName: "irene",
//   lastName: "joy",
//   age: 27,
// };

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

// Destructuring Assignment //

const redVelvet = {
  firstName: "wendy",
  lastName: "wendoy",
  age: 27,
};

let firstName = "yeri";
let age = 28;

// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = redVelvet);

console.log(firstName);
console.log(age);
