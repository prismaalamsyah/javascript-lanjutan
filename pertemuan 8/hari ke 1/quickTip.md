# Terdapat 3 Cara Untuk Membuat Variable pada Javascript
1. var
```js
console.log(i);
var i = 10;
// akan menampilkan nilai undefined. Karena terdapat konsep hoisting.
```
2. let = gunakan ketika menggunakan for
```js
console.log(i);
let i = 10;
// akan menampilkan error. Sama seperti bahasa pemrograman lain. Karena sebelum kita memanggil variable, variablenya harus dibuat dahulu.
```
3. const = gunakan ketika nilai dari variablenya tidak akan berubah
* Supaya meminimalisir perubahan state
```js
console.log(i);
const i = 10;
// akan menampilkan error. Sama seperti bahasa pemrograman lain. Karena sebelum kita memanggil variable, variablenya harus dibuat dahulu.
```

### IIFE
Sebuah function expression yang dipanggil langsung ketika dibuat.
```
**I**mmediately
**I**nvoked
**F**unction
**E**xpression
```
### SIAF
Dibuat supaya menjaga agar variable yang ada didalam function tidak bisa diakses dari luar.
```
**S**elf
**I**nvoking
**A**nonymous
**F**unction
```