// 3. Constructor Function
function Mahasiswa(nama, energi) {
    //let mahasiswa = Object.create(mahasiswa.prototype);
    this.nama = nama;
    this.energi = energi;
}
Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return 'Hallo ${this.nama}, selamat makan';
}
Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return 'Hallo ${this.nama}, selamat tidur';
}
Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return 'Hallo ${this.nama}, selamat bermain';
}
let prisma = new Mahasiswa('prisma', 10);