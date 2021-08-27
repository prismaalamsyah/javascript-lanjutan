# Higher Order Function
> "Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value." https://eloquentjavascript.net

Pada Javascript sebuah function disebut _First Class Function_ yang artinya inti dari javascript adalah function. Dimana function diperlakukan sebagai object pada javascript. Function dapat disimpan sebagai argumen maupun return value dari sebuah function yang lain.

```js
function kerjakanTugas(mataKuliah, selesai){
    console.log('Mulai mengerjakan tugas ${mataKuliah} ...');
    selesai();
}

function selesai(){
    alert('Selesai mengerjakan tugas');
}

kerjakanTugas('Pemrograman Web', selesai);

// function kerjakanTugas merupakan Higher Order Function
// function yang disimpan sebagai argumen yaitu selesai selesai merupakan Callback
```

```js
setTimeout(function()){
    console.log('Hello World');
}, 1000

// setTimeout memiliki 2 parameter, parameter pertama adalah function lalu parameter keduanya adalah integer untuk menyimpan milisecond timeoutnya yaitu 1000
// parameter pertama adalah sebuah function atau istilahnya adalah callback sehingga setTimeout adalah sebuah Higher Order Function.
```

```js
const tombol = document.querySelector('.submit');

tombol.addEventListener('.click', function(){
    console.log('tombol ditekan');
});

// ini adalah sebuah Higher Order Function
```

```js
function ucapkanSalam(waktu){
    return function(nama){
        console.log('Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan');
    }
}
let selamatMalam = ucapkanSalam('malam');
console.dir(selamatMalam('prisma'));

// Sebuah higher order function karena sebuah function yang return valuenya adalah function lagi.
```

## Alasan menggunakan Higher Order Function
* Abstraksi = agar code yang dibuat lebih sederhana dan simpel. Karena dengan menggunakan function artinya menyembunyikan sebuah kerumitan.
> _"Semakin besar sebuah program, semakin tinggi komleksitasnya, semakin membingungkan programmernya."_ https://eloquentjavascript.net
* Functional Programing = akan membuat program lebih efektif, lebih aman dan lebih efisien

## Contoh Higher Order Function
* Array.prototype.map()
* Array.prototype.filter()
* Array.prototype.reduce()