// Callback
// Synchronous Callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilPesan(callback) {
//     const nama = prompt('Masukan nama: ');
//     callback(nama);
// }

// tampilPesan(halo);

// const mhs = [
//     {
//         "nama": "Prisma Alamsyah",
//         "nim": "20090116",
//         "email": "prismaalamsyah1@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Dini Ria Safitri",
//         "nim": "20090117",
//         "email": "diniriasafitri@gmail.com",
//         "jurusan": "Akuntansi",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Cahaya Aditya Pratama",
//         "nim": "20090118",
//         "email": "cahayaadityapratama@gmail.com",
//         "jurusan": "Teknik Elektro",
//         "idDosenWali": 3
//     }
// ];
// console.log('Mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('Selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, succes, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4) {
//             if(xhr.stete === 200 ){
//                 succes(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('JAVASCRIPT-LANJUTAN/pertemuan 11/hari ke 1/data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, ( ) => {

// });

// JQuery
// console.log('mulai');
// $.ajax({
//     url:'data/mahasiswa.json',
//     succes: (mhs) => {
//         console.log(mhs);
//     },
//     error: ( ) => {

//     }
// })
// console.log('selesai');
