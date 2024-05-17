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

// Default Values //

const profile = {
  nama: "irene",
  teman: "joy",
  umur: 27,
};
const { nama, teman, myTeam = "bangsat" } = profile;

console.log(nama);
console.log(teman);
console.log(myTeam);

// Assigning to Different Local Variable Names //

const klub = {
  merah: "united",
  biru: "city",
  hijau: "liverpool",
};

const { merah: localmerah, biru: localbiru, hijau: localhijau } = klub;

console.log(localmerah);
console.log(localbiru);
console.log(localhijau);
