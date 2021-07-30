// Lexical Scope
// function init(){
//     let nama = 'Prisma alamsyah'; // Local Variable
//     function tampilNama(){ // Inner Function (Closure)
//         console.log(nama); // Akses ke parent variable
//     }
//     tampilNama();
// }
// init();

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log('Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!');
//     }
// }
// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('Prisma');
// selamatMalam('Alamsyah');


let add = (function (){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

let counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());