# Penjelasan Jawaban Soal No 3
Pada soal 3 ini anda disuruh membuat sebuah function untuk menghapus semua tanda seru yang terdapat pada string. Output yang diharapkan sebagai berikut :
	removeTandaSeru("!Hello World!") //"Hello World"

* Pertama saya membuat function removeTandaSeru yang memiliki 1 parameter yaitu str.
* Kemudian didalamnya saya menambahkan return str.replaceAll('!','');.
* Lalu menampilkan fungsi removeTandaSeru dengan mengirimkan parameter '!Hello World!' yang akan masuk ke parameter str.
* Pada fungsi return yaitu return str.replaceAll('!','');. Dimana '!' adalah sebagai karakter yang ingin diganti pada string, kemudian '' adalah sebagai karakter yang akan menggantikan '!'.