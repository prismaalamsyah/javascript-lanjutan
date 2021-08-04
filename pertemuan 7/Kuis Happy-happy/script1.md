# Penjelasan Jawaban Soal No 1
Pada soal 1 ini saya disuruh menghapus karakter pertama dan terakhir pada sebuah string dengan menggunakan function yang diberi satu parameter. Output yang diharapkan
   sebagai berikut:
    removeChar("person") //"erso"

* Pertama saya membuat function removeChar yang memiliki 1 parameter yaitu string.
* Kemudian didalamnya saya menambahkan return dari parameter string yang saya gabungkan dengan fungsi slice dengan mengisi didalamnya yaitu 1, -1.
* Karena hanya terdapat 2 argumen yang harus dihapus, maka saya mengisikannya 1 sebagai index awal dan -1 sebagai index akhir. Sebagai catatan, jika argmen bernilai negatif, maka perhitungan akan dimulai dari akhir array
* Selanjutnya menampilkan fungsi removeChar dan mengirimkan parameter "person".