# Template Literal
>"Template Literal adalah **string literal** yang memungkinkan adanya **expression** di dalamnya." **- MDN Web Docs**

* String Literal
```js
let nama = 'Prisma';
let nim = "20090116";
// dibawah adalah string literal yaitu menggunakan backtick
let email = `prismaalamsyah1@gmail.com`;
```
## Template Literal
    * Menggunakan `` back tick
    * Multi-line String
    * Embedded Expression
    * HTML Fragments
    * Expression Interpolation
    * Tagged Template

```js
`string text`

// Multi-line String
`string text baris 1  
 string text baris 2
 string text baris 3`

// embedded expression
`string text ${expression} string text`

//tagged template
tag 'string text ${expression} string text`
```

## Multi-line String
```js
console.log(`string 1
string 2`);
```

* HTML Fragments
```js
const mhs = {
    nama: 'Prisma Alamsyah',
    umur: 19,
    nim: 20090116,
    email: 'prismaalamsyah1@gmail.com'
};

let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);
```

* Embedded Expression
```js
const nama = 'Prisma Alamsyah';
let umur = 19;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun.`);
```

* Expression Interpolation
```js
let a = 10;
let b = 15;
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`);
```