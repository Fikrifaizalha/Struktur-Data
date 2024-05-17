// Destructuring Array //

const epl = ["united", "city", "country", "liverpool"];

const [klubA, klubB, klubC, klubD] = epl;

console.log(klubA);
console.log(klubB);
console.log(klubC);
console.log(klubD);

const ucl = ["united", "city", "country", "liverpool"];

const [, , , klub3] = ucl;

console.log(klub3);

// Destructuring Assignment //

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

// Dengan array destructuring assignment,
// kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.

let a = "united";
let b = "city";

console.log("before swap");
console.log("nilai a: " + a);
console.log("nilai b: " + b);

[a, b] = [b, a]; // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

console.log("after swap");
console.log("nilai a: " + a);
console.log("nilai b: " + b);

// Default Values //

// const celsi = ["mudrik"];
// const [gasing, deargod] = celsi;

// console.log(gasing); // mudrik
// console.log(deargod); // undefined

const celsi = ["mudrik"];
const [gasing, deargod = "antony"] = celsi;

console.log(gasing);
console.log(deargod);
