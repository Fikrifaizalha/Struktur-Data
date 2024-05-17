// ARRAY //
// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:

let myArray = ["united", 2, 3, true, "city"];

console.log(myArray);
console.log(myArray[0]);

// contoh //

let epl = [
  "city",
  "united",
  "liverpool",
  "arsenal",
  "spurs",
  "newcastle",
  true,
];

epl.pop(); // mengeluarkan data/elemen terakhir

epl.push("liceter"); // menambahkan data/elemen

epl.shift(); // mengeluarkan elemen pertama

epl.unshift("real madrid"); // menambahkan elemen pertama

delete epl[4]; // menghapus data pada index (undefined)

epl.splice(2, 1); // menghapus dari index 2 sebanyak 1 elemen (liverpool)
epl.splice(3, 1, "barcelona"); // menambahkan dari index 3 sebanyak 1 elemen (barcelona)

console.log(epl[0]);
console.log(epl[1]);
console.log(epl[2]);
console.log(epl[3]);
console.log(epl[4]);
console.log(epl[5]);

console.log("panjang array saya adalah " + epl.length + ".");

console.log(epl);
