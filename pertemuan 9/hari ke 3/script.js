// Latihan template literal
// 1. HTML Fragments
// const mhs = {
//     nama: 'Prisma Alamsyah',
//     umur: 19,
//     nim: 20090116,
//     email: 'prismaalamsyah1@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// Looping
// const mhs = [
// {
//     nama: 'Prisma Alamsyah',
//     email: 'prismaalamsyah1@gmail.com'
// },
// {
//     nama: 'Cahaya Aditya Pratama',
//     email: 'cahayaadityapratama@gmail.com'
// },
// {
//     nama: 'Isma Amaliyah',
//     email: 'ismaamaliyah@gmail.com'
// }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditionals
// Ternary
// const lagu = {
//     judul: 'Tetap dalam jiwa',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Prisma Alamsyah',
    semester: 2,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML = el;