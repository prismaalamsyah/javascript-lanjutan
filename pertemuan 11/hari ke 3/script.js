// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=b0e2d4fd&s=avengers',
//     success: movies => console.log(movies)
// });

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=b0e2d4fd&s=avengers');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=b0e2d4fd&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// contoh 1 promise sederhana tanpa waktu tunggu
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati');
//     }else {
//         reject('Ingkar janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));


// contoh 2 promise dengan waktu tunggu
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));
// console.log('selesai');

// Promise.all()

// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Prisma Alamsyah',
//             pemeran: 'Dini, Ria'
//         }])
//     },1000);
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Pemalang',
//             temp: 26,
//             kondisi: 'Cerah Berawan'
//         }]);
//     }, 500);
// });

// film
//     .then(response => console.log(response));

// cuaca
//     .then(response => console.log(response));

// Promise.all([film, cuaca])
//     // .then(response => console.log(response));
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca);
//     });