// Template Literal
// const nama = 'Prisma Alamsyah';
// let umur = 19;
// console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`);

// ternary operator
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Prisma Alamsyah',
    umur: 19,
    nim: 20090116,
    email: 'prismaalamsyah1@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);