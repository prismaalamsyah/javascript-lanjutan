// Spread Operator
// memecah iterable menjadi single element

// const mhs = ['prisma', 'alamsyah', 'dini'];
// console.log(...mhs);

// Menggabungkan 2 array
// const mhs = ['prisma', 'alamsyah', 'dini'];
// const dosen = ['taufiq', 'ari', 'slamet'];
// const gabung = [...mhs, 'aji', ...dosen];
// console.log(gabung);

// meng-copy array
// const mhs = ['prisma', 'alamsyah', 'dini'];
// const mhs1 = [...mhs];
// mhs1[0] = 'safitri';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;

