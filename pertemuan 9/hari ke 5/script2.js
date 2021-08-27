// Destructuring Object
// const mhs = {
//     nama: 'prisma alamsyah',
//     umur: 19
// };
// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);

// Assignment tanpa deklarasi object
// ({nama, umur} = {
//     nama: 'prisma alamsyah',
//     umur: 19
// });
// console.log(nama);
// console.log(umur);

// Assign ke variable baru
// const mhs = {
//     nama: 'prisma alamsyah',
//     umur: 19
// };
// const {nama: n, umur: u} = mhs;
// console.log(n);
// console.log(u);

// Memberikan default value
// const mhs = {
//     nama: 'prisma alamsyah',
//     umur: 19,
//     // email: 'prismaalamsyah1@gmail.com'
// };
// const {nama, umur, email = 'prisma@gmail.com'} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// Memberikan default value dan  assign ke variable baru
// const mhs = {
//     nama: 'prisma alamsyah',
//     umur: 19,
//     email: 'prismaalamsyah1@gmail.com'
// };
// const {nama: n, umur: u, email: e = 'prisma@gmail.com'} = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// Rest Parameter
// const mhs = {
//     nama: 'prisma alamsyah',
//     umur: 19,
//     email: 'prismaalamsyah1@gmail.com'
// };
// const {nama, ...value} = mhs;
// console.log(nama);
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function 
// const mhs = {
//     id: 123,
//     nama: 'prisma alamsyah',
//     umur: 19,
//     email: 'prismaalamsyah1@gmail.com'
// };

// function getIdMhs({ id }) {
//     return id;
// };

// console.log(getIdMhs(mhs))