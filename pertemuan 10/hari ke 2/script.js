// for ...of
// 1. Array
// const mhs = ['prisma', 'alamsyah', 'dini'];

// for
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// forEach
// mhs.forEach(m => console.log(m));

// for ..of
// for( const m of mhs ){
//     console.log(m);
// }

// 2. String
// const nama = 'prisma';
// for( const n of nama){
//     console.log(n);
// }

// forEach
// const mhs = ['prisma', 'alamsyah', 'dini'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for ..of
// const mhs = ['prisma', 'alamsyah', 'dini'];
// for( [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// };

// 3. NodeList
const liNama = document.querySelectorAll('.nama');

// forEach
// liNama.forEach(n => console.log(n.innerHTML));

// for ..of
// for( const n of liNama){
//     console.log(n.innerHTML);
// };

// 4. Arguments
// function jumlahAngka(){
//     let jumlah = 0;
//     for(j of arguments){
//         jumlah += j;
//     }
//     return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));