for(var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Pada bahasa pemrograman lain, ini akan error, tetapi tidak pada javascript, karena javascript menganut function scope.

function tes(){
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
}
tes();
console.log(i);
// Harusnya console.log yang diakhir akan error karena memang harusnya seperti ini, inilah yang disebut function scope. 

// Cara Lama
(function(){
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
}());
console.log(i);
// Harusnya console.log yang diakhir akan error karena memang harusnya seperti ini, inilah yang disebut function scope.
// Ketika bekerja berkolaborasi itu memungkinkan mempunyai nama variable yang sama tetapi fungsinya berbeda atau misalkan menggunakan script oranglain library yang ada di internet, kebetulan nama variablenya sama tapi functionnya berbeda, dan itu bisa menyebabkan bentrok, karena prilakunya beda.

// Cara Baru ES6
for(let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Cukup mengganti var mejadi let. Maka console.log yang ada diakhir akan error, karena let menganut block scope.


const mhs = {
    nama: 'Prisma Alamsyah',
    umur: 19
}
mhs.umur = 20;
// mhs = {
//     jurusan: 'Teknik Informatika'
// }
console.log(mhs);
// Masih bisa diubah asal bukan objectnya yang diubah
// Tidak bisa mengubah atau menambah sesuatu yang baru langsung pada nilai dari variable const