const fans = {
  namaSaya: "fikri",
  umurSaya: 27,
  hobiSaya: "bermain game",
  "pacar saya": 2,
};

console.log(
  `hallo nama saya ${fans.namaSaya} umur saya ${fans.umurSaya} tahun`
);
console.log(`hobi saya ${fans.hobiSaya} dan pacar saya ${fans["pacar saya"]}`);

// Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, selanjutnya kita akan memodifikasi sebuah object.
// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).

const united = {
  namaSaya: "fikri",
  umurSaya: 27,
  hobiSaya: "bermain game",
  klubSaya: "Real Madrid",
  "Hair Color": "blonde",
};
united.color = "red";
united.klubSaya = "manchester United";
united["umurSaya"] = 28;
delete united.umurSaya;

console.log(united);
