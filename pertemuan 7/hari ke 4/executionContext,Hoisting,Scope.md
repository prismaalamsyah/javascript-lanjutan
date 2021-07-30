# Execution Context, Hoisting, Scope
```js
console.log(nama);
var nama = 'Prisma Alamsyah';
```
Creation phase pada global context
* nama var = undefined
* nama function = fn()
* hoisting
* window = global object
* this = window

Execution phase
```js
console.log(sayHello());

var nama = 'Prisma Alamsyah';
var umur = 19;

function sayHello(){
    return 'Hallo nama saya ${nama}, saya ${umur} tahun';
}
```
* Function membuat Local Execution Context
* yang didalamnya terdapat creation dan execution phase
* window
* arguments
* hoisting

```js
var nama = 'Prisma Alamsyah';
var username = '@prismaalamsyah';

function cetakUrl(username){
    var instagramUrl = 'http://instagram.com/';
    return instagramUrl + username;
}

console.log(cetakUrl(username));
```
```js
function a(){
    console.log('ini a');
    function b(){
        console.log('ini b');
        function c(){
            console.log('ini c');
        }
        c();
    }
    b();
}
a();
```
```js
function satu(){
    var nama = 'prisma alamsyah';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'erik';
satu();
dua('ihza');
console.log(nama);
```