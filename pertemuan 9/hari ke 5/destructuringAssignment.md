# Destructuring Assignment
>"Expression pada javascript yang membuat kita dapat '**membongkar**' nilai dari **array** atau properti dari **object** kedalam **variable** yang terpisah." 
**- MDN Web Docs**

```js
// Array
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a); // satu
console.log(b); // dua
console.log(c); // tiga
```

```js
// Object
const mhs = {
    nama: 'Prisma Alamsyah',
    umur: 19,
    email: 'prismalamaysh1@gmail.com'
};

const {nama, umur, email} = mhs;
console.log(nama); // Prisma Alamsyah
console.log(umur); // 19
console.log(email); // prismaalamsyah1@gmail.com
```