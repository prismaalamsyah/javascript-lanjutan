// Function Expression
// const tampilNama = function (nama){
//     return 'halo,  ${nama}';
// }
// console.log(tampilNama('Prisma Alamsyah'));

// Implisit return
// satu parameter dan isinya hanya return
// misalkan tanpa parameter maka yang ditulis adalah ()
// const tampilNama = nama =>  'halo,  ${nama}';
// console.log(tampilNama('Prisma Alamsyah'));


// const tampilNama = (nama, waktu) => {
//     return 'selamat ${waktu},  ${nama}';
// }
// console.log(tampilNama('prisma alamsyah', 'malam'));


// Function map
let mahasiswa = ['prisma', 'alamsyah', 'dodi'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow Functionnya
// let jumlahHuruf = mahasiswa.map (nama => nama.length);
// console.log(jumlahHuruf);

// Returnnya sebagai object
let jumlahHuruf = mahasiswa.map (nama => ({ nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);
// Pada javascript yang baru, ketika ingin mengembalikan object yang propertinya sama dengan nilainya cukup tulis satu saja. Contohnya diatas yaitu properti nama.