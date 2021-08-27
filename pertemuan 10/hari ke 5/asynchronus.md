# Asynchronus
* Callback
* Promise
* Ajax
* Async & Await

>*"Javascript is a **single-threated, non-blocking, asynchronous** and **concurrent** language."*

## 1. Single-threated
>**Thread** "Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain."

**Single-Thread** artinya javascript membaca baris perbaris dan menyelesaikannya.

## Multi-threated
>**Threated** nya banyak, walaupun secara umum pekerjaanya hanya dapat dilakukan satu persatu, namun bisa dikerjakan oleh threated yang berbeda. Jadi pekerjaannya bisa dibagi-bagi kedalam threated yang berbeda.

## 2. Blocking
>"Mengerjakan tugas pertama, jika tugas pertama belum terselesaikan maka tidak dapat lanjut ke tugas selanjutnya, sebaliknya jika tugas pertama berhasil diselesaikan, maka tugas selanjutnya bisa dikerjakan."

## Non-Blocking
>"Ketika mengerjakan tugas pertama, meskipun pekerjaanya belum selesai, namun bisa dilanjutkan ke tugas selanjutnya."

## 3. Synchronous
>"Mengerjakan tugas sesuai urutannya dan sesuai spreadnya ."
## Asynchronous (single-threated) = Concurrency
>"Dapat mengerjakan tugas pertama pada spread 1 dan dapat pula berpindah mengerjakan tugas kedua. Lalu bergantian mengerjakan tugas 1 tugas 2 sampai akhirnya tugas 1 selesai dan tugas 2 selesai."
## Asynchronous (multi-threated) = Parallelism
>"Dapat mengerjakan beberapa tugas secara bersamaan meskipun berbeda threated."

## Kesimpulan
* Single vs Multi-threated

Lingkungan eksekusi 'task'.
* Blocking vs Non-Blocking

Teknik 'ngoding' (berhubungan input dan output).
* Synchronous vs Asynchronous

Teknik 'ngoding' (berhubungan dengan request http).
* Concurrnet vs Parallel

Lingkungan eksekusi 'task'.

* #### Javascript adalah single-threated, Non-Blocking, Asynchronous
* #### Javascript mempunyai v8 engine yang tertanam pada web browser
Didalam v8 engine terdapat heap dan stack
* heap = Memory Allocation
* stack = Function Call & Execution Context

