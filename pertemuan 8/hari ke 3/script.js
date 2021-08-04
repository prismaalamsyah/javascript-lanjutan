// Konsep this pada Arrow Function

//constructor function
// const Mahasiswa = function(){
//     this.nama = 'Prisma';
//     this.umur = 19;
//     this.sayHello = function(){
//         console.log('halo,nama saya ${this.nama}, dan saya ${this.umur} tahun.');
//     }
// }
// const prisma = new Mahasiswa();

//Arrow Function
// Arrow Function tidak menyimpan konteks this
// const Mahasiswa = function(){
//     this.nama = 'Prisma';
//     this.umur = 19;
//     this.sayHello = () => {
//         console.log('halo,nama saya ${this.nama}, dan saya ${this.umur} tahun.');
//     }
// }
// const prisma = new Mahasiswa();

// Object Literal
// const mhs1 = {
//     nama: 'prisma',
//     umur: 19,
//     sayHello: () => {
//         console.log('halo,nama saya ${this.nama}, dan saya ${this.umur} tahun.');
//     }
// }
// this tidak mencari ke leksikal scopenya karena tidak ada. maka mencarinya sampai ke window.


// const Mahasiswa = function(){
//     this.nama = 'Prisma';
//     this.umur = 19;
//     this.sayHello = () => {
//         console.log('halo,nama saya ${this.nama}, dan saya ${this.umur} tahun.');
//     }
//     // arrow function tidak punya konteks this, maka akan mencarinya ke leksikal scope
//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }
// const prisma = new Mahasiswa();



const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption'

    if(this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua); 
    },600);
});