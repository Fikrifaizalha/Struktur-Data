// Spread Operator //

const epl = ["united", "city", "state", "country"];
const laliga = ["real madrid", "barcelona", "girona"];

const sepakbola = [...epl, ...laliga];

console.log(...epl);

console.log(sepakbola);

const objek1 = { namaSaya: "fikri", umurSaya: 27 };
const objek2 = { namaBelakang: "faizal", gender: "male" };

const objek3 = { ...objek1, ...objek2 };

console.log(objek3);
