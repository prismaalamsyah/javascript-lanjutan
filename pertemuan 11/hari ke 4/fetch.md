# Fetch ( )
>*"Adalah sebuah API pada javascript modern yang tugasnya untuk mengabil data, secara asynchronous atau ajax sama seperti XMLHttpRequest pada vanilla javascript atau juga menggunakan method ajax pada JQuery."*

>*"Sebuah method pada API untuk mengambil **resource** dari jaringan, dan mengembalikan **promise** yang selesai (**fullfilled**) ketika ada **response** yang tersedia."*

```
fetch(resource, init);
```
### Resource
* URL = alamat dari sumber yang diambil
* Request Object = representasi permintaan sumber

### Init (optional)
konfigurasi tambahan pada sebuah request berbentuk object
* method
* headers
* body
* mode
* cache
* referrer
* referrerPolicy
* integrity
* keepalive
* signal

### Response (property)
* headers
* ok
* redirected
* status
* statusText
* type
* url
* body
### Response (method)
* clone()
* error()
* redirect()
* blob()
* formatData()
* json()
* text()