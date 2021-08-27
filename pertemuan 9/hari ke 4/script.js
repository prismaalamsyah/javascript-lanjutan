// Tagged Templates
// const nama = 'Prisma Alamsyah';
// const umur = 19;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Prisma Alamsyah';
const umur = 19;
const email = 'prismaalamsyah1@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

document.body.innerHTML = str;