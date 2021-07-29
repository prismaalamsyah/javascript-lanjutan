// Cara untuk membuat Object pada javascript
// 1. Object Literal
let mahasiswa1 = {
    nama : 'Prisma',
    energi : 10,
    makan : function (porsi) {
        this.energi = this.energi + porsi;
        console.log('Hallo ${this.nama}, selamat makan!');
    }
}

let mahasiswa2 = {
    nama : 'Alamsyah',
    energi : 20,
    makan : function (porsi) {
        this.energi += porsi;
        console.log('Hallo ${this.nama}, selamat makan!');
    }
}





// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log('Hallo ${this.nama}, selamat makan');
    }
    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log('Hallo ${this.nama}, selamat bermain');
    }
    return mahasiswa;
}

let prisma = Mahasiswa ('prisma', 10);
let alamsyah = Mahasiswa ('alamsyah', 20);





// 3. Constructor Function
function Mahasiswa(nama, energi) {
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log('Hallo ${this.nama}, selamat makan');
    }
    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log('Hallo ${this.nama}, selamat bermain');
    }
}

let prisma = new Mahasiswa ('prisma', 10);
let alamsyah = new Mahasiswa ('alamsyah', 20);