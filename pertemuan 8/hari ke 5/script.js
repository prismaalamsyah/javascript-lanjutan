const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// mencari angka >= 3

//filter
// const newAngka = angka.filter(a > a >= 3);
// console.log(newAngka);

//map
// const newAngka = angka.map(a > a*2);
// console.log(newAngka);

//reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

//method Chaining
// cari angka > 5
// kali 3
// jumlahkan
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);