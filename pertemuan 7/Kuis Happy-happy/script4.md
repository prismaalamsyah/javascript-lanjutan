# Penjelasan Jawaban Soal No 3
Terdapat sebuah array of object sebagai berikut :
```js
    const vegzas = [
	  {
	    name: "Charly",
	    age: 22,
	    coder: true,
	    gender: "m",
	  },
	  {
	    name: "Steven",
	    age: 35,
	    coder: true,
	    gender: "m",
	  },
	  {
	    name: "Law",
	    age: 21,
	    coder: true,
	    gender: "m",
	  },
	  {
	    name: "Rosey",
	    age: 42,
	    coder: false,
	    gender: "f",
	  },
	  {
	    name: "Steph",
	    age: 18,
	    coder: true,
	    gender: "f",
	  },
	  {
	    name: "Jon",
	    age: 47,
	    coder: false,
	    gender: "m",
	  },
	];
```

   anda disuruh menampilkan semua object yang gendernya m dan umurnya lebih dari 30. Output yang diharapkan sebagai berikut :
```js
	[
	  { name: 'Steven', age: 35, coder: true, gender: 'm' },
	  { name: 'Jon', age: 47, coder: false, gender: 'm' }
	]
```

* Pertama saya membuat array dengan nama vegzas yang berisi data - data orang yang menampung nama, umur, coder dan kelamin.
* Kemudian saya membuat variable let nameFilter yang isinya array vegzas.filter untuk menyeleksi, kualifikasi yang diseleksi yaitu berdasarkan gender m. dan usia lebih dari 30 tahun, menuliskan code programnya dengan cara awali dengan nama arraynya yaitu vegzas kemudian => vegzas.gender === m, dan && vegzas.age > 30.
* Terakhir tampilkan isi dari nameFilter dengan menggunakan console.log