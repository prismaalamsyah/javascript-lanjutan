// Rest Parameter
// function myFunc (){
    // return myArgs;
    // return Array.from(arguments);
//     return [...arguments];
// };
// console.log(myFunc(1, 2, 3, 4, 5));


// function jumlahkanAngka(...angka){
//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkanAngka(1,2,3,4,5));

// array destructuring
// const kelompok1 = ['prisma', 'alamsyah', 'dini', 'ria', 'safitri'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'prisma',
//     frontEnd1: 'alamsyah',
//     frontEnd2: 'dini',
//     backend: 'ria',
//     ux: 'safitri',
//     devOps: 'camat'
// }

// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
// function filterBy(type, ...values){
//     return values.filter(v => typeof v === type);
// }
// console.log(filterBy('number', 1,2,'prisma',true, 10));