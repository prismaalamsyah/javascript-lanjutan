// function penjumlahanPerkalian(a, b){
//     return [a + b, a * b];
// };

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// Array pada return value
// function kalkulasi(a, b){
//     return [a + b, a - b, a * b, a / b];
// };

// Urutan sangat berpengaruh
// const [tambah, kurang, kali, bagi] = kalkulasi(6, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// Objeect pada return value
// function kalkulasi(a, b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// };

// Urutan tidak berpengaruh
// const {kali, bagi, tambah, kurang} = kalkulasi(6, 3);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);
// console.log(tambah);

// Destructuring function argument
// const mhs1 = {
//     nama: 'prisma alamsyah',
//     umur: 19,
//     email: 'prismaalamsyah1@gmail.com'
// };

// function cetakMhs(mhs){
//     return `Hallo nama saya ${mhs.nama}, saya berusia ${mhs.umur} tahun`;
// };

// console.log(cetakMhs(mhs1));

// const mhs1 = {
//     nama: 'prisma alamsyah',
//     umur: 19,
//     email: 'prismaalamsyah1@gmail.com'
// };

// function cetakMhs({nama, umur}){
//     return `Hallo nama saya ${nama}, saya berusia ${umur} tahun`;
// };

// console.log(cetakMhs(mhs1));

// Destructuring argument bersarang
const mhs1 = {
    nama: 'prisma alamsyah',
    umur: 19,
    email: 'prismaalamsyah1@gmail.com',
    nilai: {
        tugas: 90,
        uts: 85,
        uas: 85
    }
};

function cetakMhs({nama, umur, nilai:{tugas}}){
    return `Hallo nama saya ${nama}, saya berusia ${umur} tahun. Dan nilai tugas saya adalah ${tugas}`;
};

console.log(cetakMhs(mhs1));