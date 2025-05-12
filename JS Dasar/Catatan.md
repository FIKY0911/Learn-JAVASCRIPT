# JAVASCRIPT DASAR

**2025 April 17**

### Developer Tools Console

Didalam console browser, kita bisa menggunakan beberapa fitur yang berguna untuk debugging aplikasi. Dan disebut sebagai REDPLUG (Remote Debugging Protocol) yang memungkinkan kita untuk debugging aplikasi di browser. dan REDPL atau Read Evaluate Print Loop adalah sebuah fitur yang memungkinkan kita untuk mengeksekusi code

### 1. Pengenalan JavaScript
**JavaScript** adalah bahasa pemrograman yang digunakan untuk membuat **interaksi** dinamis pada web.
Javascript dapat memanipuasi HTML dan CSS untuk membuat aplikasi web yang lebih interaktif.

### 2. Variable
**Variabel** adalah tempat penyimpanan nilai. Pada JavaScript, kita dapat mendefiniskan variabel dengan menggunakan kata kunci `let` atau `const`.

Seperti lable untuk sebuah value

- Kita bisa menyimpan sebuah nilai dan akan menamakannya

- Akan kita panggil atau gunkan nanti 

- Gunakan nilai tersebut untuk melakukan... sesuatu

- Atau diubah isinya nanti

 **Contoh  sintaks sederhana:**
 ```javascript
 let tahunMerdeka = 1945;

 let lamaTahunMerdeka = 2025 - tahunMerdeka;

 lamaTahunMerdeka; //80
 ```

**Cara memperbarui nilai variabel:**
```javascript
let score = 0;

score = score + 1;

score;// 1

//Lebih simple
let score = 10;
score += 1; // 11

score *= 2 //22

score /= 2 //11

score -= 1 //10

score %= 2 //0

score // 0

//incremental
score++ // 1

score-- //0
```

**CONST**

```javascript
const ayam = 10
ayam = 20 /*EROR*/

const umur = 17;
age = age + 1; // EROR

//"const" sama seperti "let" tapi nilainya tidak bisa diubah
```

### 3. Tipe Data
**Tipe data** adalah jenis data yang dapat disimpan dalam variabel. Pada JavaScript, ada 5 jenis tipe data yang dimiliki.

- **Number**: untuk menyimpan nilai bilangan.
- **String**: untuk menyimpan nilai bilangan.
- **Boolean**: untuk menyimpan nilai bilangan.
- **Null**: untuk menyimpan nilai bilangan.
- **Undefined**: untuk menyimpan nilai bilangan.
- **Object**: untuk menyimpan nilai bilangan.
  

## -Numbers
**Number** adalah tipe data yang digunakan untuk menyimpan nilai bilangan.

Didalam javascript:
- **Memiliki satu jenis**: Setiap tipe data di number disebut dengan number berbea dengan bahasa pemrograman lainnya, yang memiliki berbagai jenis seperti integer, float, dan lain-lain.
- **Bil.Positif**: untuk menyimpan nilai bilangan positif.
- **Bil.Negative**: untuk menyimpan nilai bilangan negatif.
- **Seluruh Angka (int)**: untuk menyimpan nilai bilangan bulat.
- **Angka Desimal**: untuk menyimpan nilai bilangan desimal.
- **NaN**: untuk menyimpan nilai bilangan tidak dapat dihitung.

**Contoh:**
```javascript
50
7
3.074
0.11
-46
-442.5534
```
**Operasi Matematika** yang dapat dilakukan pada number adalah:
```javascript
//addition (tambahan)
50 + 5 //55

//Subtraction (Penguran)
90 - 1 //89

//Multiplication (perkalian)
111 * 6 //666

//Division (Pembagi)
100 / 5 //20

//Modulo(Modulus)
27 % 5 //2

//simbol garis miring dua kali (baris akan dibiarkan)
```

  ##Nan##
  
  "Not a N,ber merupakan sebuah nilai yang tidak dapat dihitung, atau tidak dapat diakses"
  - **Contoh:**
    ```javascript
    0/0 //Nan

    1 + NaN // NaN
    ```

## Boolean

**Boolean** adalah sebuah tipe data yang dapat memiliki nilai true atau false.

Didalam javasciprt:

- true
- false

**Tips Memberikan Nama Varible**

- Gunakan nama variable yang deskriptif dan mudah dipahami
- Gunakan huruf kecil untuk nama variable pada awal kalimat
- Jangan menggunakan spasi atau simbol di nama variable
- Gunakan **underscore (_) atau snake_case**, sankeCase **(camelCase)**, SnakeCase **(Pascal Case)**jika nama variable terdiri dari lebih dari satu kata, dan awal kata meggunkan simbol **($variable)**
- Jangan menggunakan angka di awal nama variable
- Gunakan nama variable yang singkat dan mudah diingat
- Gunakan nama variable yang konsisten dengan konvensi yang digunakan dalam proyek


## -String

Tipe data primitif yang digunakan untuk menyimpan teks atau string dan dibungkus dengan tanda kutip satu ( ' ' ) atau tanda kutip dua ( " " ).

**Contoh:**
```javascript
let namaDepan = "Fiky" //pakai kutip dua
let hobi = 'Nonton Youtube' //pakai kutip satu
let ngaco = "emotional damage' //gak bisa beda gini 

let duaQuote = 'saya mngucapkan "selamat"'

//Harus konsisten kutipnya
```

**String memiliki nilai index**

  Masing-masing karakter dalam string memiliki nilai index yang dapat diakses dengan menggunakan notasi array. Nilai index dimulai dari 0

**Contoh:**
```javascript
let namaDepan = "Fiky"

nama[0] // F

nama.length // 4

nama = nama + " Aji" // Fiky Aji

nama[4] // ' '

let namaDepan = "Fiky" // Fiky

let namaBelakangan = "Reca" // Reca

let namaLengkap = namaDepan + " " + namaBelakangan // Fiky Reca

namaLengkap += 1 // Fiky Reca1
```

**Methods**

Method adalah suatu aksi yang disediakan oleh javascript

- Sangat membantu kita saat ingin 
  - Mencari sebuah atau kata
  - Menggantikan karakter
  - Mungubah huruf besar/kesil

**Link reference string:**

[link reference string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**Contoh:**


```javascript
 //Membuat Semua Kapital
let greating = 'hello world'

greeting.toUpperCase() // HELLO WORLD

greting // hello world
//atau
'HELLO WORLD'.toLowerCase() // hello world

//Menghapus Spasi didepan
let greeting = '  hello world '
greeting.trim() // 'hello world'

//Menggabungan Lebih Dari Satu Method
let greeting = '  hello world '
greeting = greeting.trim().toUpperCase() // 'HELLO WORLD'
```

**Method Dan Argument (Parameter)**

  > some.method(arg);

Beberapa method menerima argument yg mengubah hasilnya. Mirip seperti inputan, kita isikan di dalam tanda kurung.

**Contoh:**

```javascript
let movie = 'black list;
movie.indexOf('list') // 6

greeting.slice(0,5) // 'black '
greeting.slice(5) // ' list'

//Mengganti string
greeting.replace('list', 'mamba') // 'black mamba'
```

**TEMPLATE LITERALS**

Gunakan back-tick ( ` ) bukan quote  ( ' )
```javascript
`Hasil 1 + 1 = ${1 + 1}` // Hasil 1 + 1 = 2
```

## Null & Undefined
Null adalah nilai yang tidak ada, sedangkan undefined adalah nilai yang tidak diketahui.

- `null`
    - nilai "kosong" yang sengaja ada
    - perlu dibuat.

- `undefined`
    - variable yang dibuat tapi belum ada isinya/tidak ada sama sekali 
  
  **Contoh Null dan Undefined:**

  ```javascript
  // Null
  let kosong = null; // nilai kosong yang sengaja diberikan
  console.log(kosong); // null

  // Undefined
  let belumDiisi; // variabel dideklarasikan tapi belum diberi nilai
  console.log(belumDiisi); // undefined
  ```

  **Math Object**

  Math object adalah sebuah object yang menyimpan nilai-nilai matematika dasar seperti pembualatan, nilai konstan, dan matematika lainnya.

  **Contoh**

  ```javascript
  Math.PI // 3.141592653589793

  Math.E // 2.718281828459045

  // Pembulatan ke atas
  Math.ceil(4.2); // 5

  // Pembulatan ke bawah
  Math.floor(4.8); // 4

  // Pembulatan ke nilai terdekat
  Math.round(4.5); // 5
  Math.round(4.4); // 4

  // Mendapatkan nilai maksimum
  Math.max(10, 20, 30); // 30

  // Mendapatkan nilai minimum
  Math.min(10, 20, 30); // 10

  // Mendapatkan nilai acak antara 0 dan 1
  Math.random(); // Contoh: 0.123456789

  // Pangkat
  Math.pow(2, 3); // 8 (2 pangkat 3)

  // Akar kuadrat
  Math.sqrt(16); // 4

  //pembulatan
  Math.round(4.7); // 5

  //Nilai absolut
  Math.abs(-5); // 5
  ```

**Operator Pembanding**

```javascript
> // Lebih besar dari
< // Kurang dari
>= // Lebih besar dari atau sama dengan
<= // Kurang dari atau sama dengan
== // Sama dengan (sama dengan)
!= // Tidak sama dengan (tidak sama dengan)
=== // Sama dengan (sama dengan, termasuk jenis data)
!== // Tidak sama dengan (tidak sama dengan, termasuk jenis data)
```

**Contoh :**

```javascript
let x = 15;
let y = "15";

// Perbandingan nilai saja
console.log(x == y);  // true, karena hanya membandingkan nilai
console.log(x != y);  // false, karena nilai sama

// Perbandingan nilai dan tipe data
console.log(x === y); // false, karena tipe data berbeda
console.log(x !== y); // true, karena tipe data berbeda

// Perbandingan lebih besar atau lebih kecil
console.log(x > 10);  // true, karena 15 lebih besar dari 10
console.log(x < 20);  // true, karena 15 lebih kecil dari 20
console.log(x >= 15); // true, karena 15 sama dengan 15
console.log(x <= 10); // false, karena 15 tidak lebih kecil atau sama dengan 10
```

**== (double equals)**

- hanya memeriksa nilai, tidak memeriksa jenis data
- memungkingkan kesalahan, karena dapat membandingkan nilai yang berbeda jenis data

**Contohnya:**

```javascript
console.log(5 == '5'); // true, karena hanya membandingkan nilai
console.log(0 == false); // true, karena false dianggap 0
console.log(null == undefined); // true, karena null dan undefined dianggap sama
console.log('' == false); // true, karena string kosong dianggap false

// Contoh tambahan:
console.log(1 == true); // true, karena true dianggap 1
console.log('1' == true); // true, karena '1' dianggap 1
console.log([] == false); // true, karena array kosong dianggap false
console.log([1] == true); // true, karena array dengan satu elemen dianggap true
console.log('0' == false); // true, karena '0' dianggap 0
console.log('' == 0); // true, karena string kosong dianggap 0
```

Lebih baik menggunakan **triple equals (`===`)** untuk memeriksa nilai dan jenis data, karena lebih akurat dan tidak memungkingkan kesalahan. Jika Anda tidak yakin jenis data yang akan digunakan

**Contoh :**

```javascript
// Triple equals (===) memeriksa nilai dan tipe data
let a = 5;
let b = "5";
let c = 5;

// Perbandingan nilai dan tipe data
console.log(a === b); // false, karena tipe data berbeda (number vs string)
console.log(a === c); // true, karena nilai dan tipe data sama (number)

// Perbandingan dengan boolean
console.log(true === 1); // false, karena tipe data berbeda (boolean vs number)
console.log(false === 0); // false, karena tipe data berbeda (boolean vs number)

// Perbandingan dengan null dan undefined
console.log(null === undefined); // false, karena tipe data berbeda (null vs undefined)

// Perbandingan dengan objek
let obj1 = { key: "value" };
let obj2 = { key: "value" };
let obj3 = obj1;

console.log(obj1 === obj2); // false, karena meskipun nilai sama, referensi berbeda
console.log(obj1 === obj3); // true, karena referensi sama

// Perbandingan dengan array
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // false, karena referensi berbeda
console.log(arr1 === arr3); // true, karena referensi sama
```

**Catatan:**
- Gunakan `===` untuk membandingkan nilai dan tipe data secara ketat.
- Hindari menggunakan `==` kecuali Anda memahami implikasi dari perbandingan longgar.
- Untuk membandingkan objek atau array, gunakan metode seperti `JSON.stringify()` atau perbandingan referensi jika diperlukan.

**Console, Alert, dan Prompt**

- Eksekusi Javascript memelalui file
- menampilkan hasil eksekusi ke console/dev tool browser

**Contoh :**

```javascript
// Menampilkan pesan ke console
console.log("Hello, World!");

// Menampilkan pesan ke layar dengan alert
alert("Selamat datang di JavaScript!");

// Meminta input dari pengguna dengan prompt
let nama = prompt("Siapa nama Anda?");
console.log(`Halo, ${nama}! Selamat belajar JavaScript.`);
```


### IF Statement

**IF Statement** adalah salah satu struktur kontrol dalam JavaScript yang digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Jika kondisi yang diberikan bernilai **true**, maka blok kode di dalamnya akan dijalankan.

**Sintaks Dasar:**
```javascript
if (kondisi) {
  // kode yang akan dijalankan jika kondisi bernilai true
}
```

**Contoh:**
```javascript
let umur = 18;

if (umur >= 18) {
  console.log("Anda sudah cukup umur untuk membuat KTP.");
}
```

**IF-ELSE Statement**

Jika kondisi **if** bernilai **false**, maka blok kode di dalam **else** akan dijalankan.

**Sintaks:**
```javascript
if (kondisi) {
  // kode yang dijalankan jika kondisi bernilai true
} else {
  // kode yang dijalankan jika kondisi bernilai false
}
```

**Contoh:**
```javascript
let umur = 16;

if (umur >= 18) {
  console.log("Anda sudah cukup umur untuk membuat KTP.");
} else {
  console.log("Anda belum cukup umur untuk membuat KTP.");
}
```

**IF-ELSE IF-ELSE Statement**

Digunakan untuk memeriksa beberapa kondisi.

**Sintaks:**
```javascript
if (kondisi1) {
  // kode jika kondisi1 bernilai true
} else if (kondisi2) {
  // kode jika kondisi2 bernilai true
} else {
  // kode jika semua kondisi bernilai false
}
```

**Contoh:**
```javascript
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda: A");
} else if (nilai >= 80) {
  console.log("Nilai Anda: B");
} else if (nilai >= 70) {
  console.log("Nilai Anda: C");
} else {
  console.log("Nilai Anda: D");
}
```

**Nested IF**

Kita juga dapat menggunakan **if** di dalam **if** lain.

**Contoh:**
```javascript
let username = "admin";
let password = "12345";

if (username === "admin") {
  if (password === "12345") {
    console.log("Login berhasil!");
  } else {
    console.log("Password salah!");
  }
} else {
  console.log("Username tidak ditemukan!");
}
```

**Catatan:**
- Gunakan **if-else** untuk membuat keputusan logis.
- Pastikan kondisi yang digunakan menghasilkan nilai boolean (**true** atau **false**).
- Gunakan operator logika seperti `&&` (AND) dan `||` (OR) untuk menggabungkan beberapa kondisi.
- Hindari terlalu banyak **nested if** karena dapat membuat kode sulit dibaca.

**Cek Kondisi Berlapis Lebih Aman**

**Contoh :**

```javascript
const password = prompt('buat password');

//password harus sepanjang 6 karakter
if(password.length >= 6) {
  if (password.indexOf(' ') === -1){
    console.log('Password valid' )
  }else {console.log('Password tidak boleh ada spasi')
  }
}else{
  console.log('Password minimal 6 karakter')
}
```

**Operator Logika AND (`&&`)**

Operator logika AND (`&&`) digunakan untuk mengevaluasi dua atau lebih kondisi. Hasilnya akan bernilai **true** jika semua kondisi bernilai **true**. Jika salah satu kondisi bernilai **false**, maka hasilnya akan **false**.

**Sintaks:**
```javascript
kondisi1 && kondisi2
```

**Contoh:**
```javascript
let umur = 25;
let memilikiSIM = true;

if (umur >= 18 && memilikiSIM) {
  console.log("Anda diperbolehkan mengemudi.");
} else {
  console.log("Anda tidak diperbolehkan mengemudi.");
}
```

**Penjelasan:**
- Kondisi pertama: `umur >= 18` bernilai **true** karena umur adalah 25.
- Kondisi kedua: `memilikiSIM` bernilai **true**.
- Karena kedua kondisi bernilai **true**, maka blok kode di dalam `if` akan dijalankan.

**Catatan:**
- Gunakan operator AND (`&&`) untuk memastikan semua kondisi terpenuhi.
- Jika salah satu kondisi bernilai **false**, maka blok kode di dalam `else` akan dijalankan.

**Contoh Lain:**
```javascript
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login berhasil!");
} else {
  console.log("Login gagal!");
}
```

**Penjelasan:**
- Kondisi pertama: `username === "admin"` bernilai **true**.
- Kondisi kedua: `password === "12345"` bernilai **true**.
- Karena kedua kondisi bernilai **true**, maka pesan "Login berhasil!" akan ditampilkan.
- Jika salah satu kondisi bernilai **false**, maka pesan "Login gagal!" akan ditampilkan.

**Operator Logika OR (`| |`)**

Operator logika OR (`| |`) digunakan untuk mengevaluasi dua atau lebih kondisi. Hasilnya akan bernilai **true** jika salah satu kondisi bernilai **true**. Jika semua kondisi bernilai **false**, maka hasilnya akan **false**.

**Sintaks:**
```javascript
kondisi1 | | kondisi2
```

**Contoh:**
```javascript
let umur = 16;
let memilikiSuratIzin = false;

if (umur >= 18 || memilikiSuratIzin) {
  console.log("Anda diperbolehkan mengemudi.");
} else {
  console.log("Anda tidak diperbolehkan mengemudi.");
}
```

**Penjelasan:**
- Kondisi pertama: `umur >= 18` bernilai **false** karena umur adalah 16.
- Kondisi kedua: `memilikiSuratIzin` bernilai **false**.
- Karena kedua kondisi bernilai **false**, maka blok kode di dalam `else` akan dijalankan.

**Catatan:**
- Gunakan operator OR (`||`) untuk memastikan salah satu kondisi terpenuhi.
- Jika semua kondisi bernilai **false**, maka blok kode di dalam `else` akan dijalankan.

**Contoh Lain:**
```javascript
let username = "admin";
let password = "12345";

if (username === "admin" || password === "12345") {
  console.log("Login berhasil!");
} else {
  console.log("Login gagal!");
}
```

**Penjelasan:**
- Kondisi pertama: `username === "admin"` bernilai **true**.
- Kondisi kedua: `password === "12345"` bernilai **true**.
- Karena salah satu kondisi bernilai **true**, maka pesan "Login berhasil!" akan ditampilkan.
- Jika kedua kondisi bernilai **false**, maka pesan "Login gagal!" akan ditampilkan.

**Operator Logika NOT (`!`)**

Operator logika NOT (`!`) digunakan untuk membalikkan nilai boolean. Jika nilai awal adalah **true**, maka hasilnya akan menjadi **false**, dan sebaliknya.

**Sintaks:**
```javascript
!kondisi
```

**Contoh:**
```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Anda harus login terlebih dahulu.");
} else {
  console.log("Selamat datang!");
}
```

**Penjelasan:**
- Nilai `isLoggedIn` adalah **false**.
- Operator `!` membalikkan nilai menjadi **true**.
- Karena kondisi menjadi **true**, maka pesan "Anda harus login terlebih dahulu." akan ditampilkan.

**Contoh Lain:**
```javascript
let angka = 0;

if (!angka) {
  console.log("Angka bernilai falsy.");
} else {
  console.log("Angka bernilai truthy.");
}
```

**Penjelasan:**
- Nilai `angka` adalah `0`, yang merupakan nilai **falsy** dalam JavaScript.
- Operator `!` membalikkan nilai menjadi **true**.
- Karena kondisi menjadi **true**, maka pesan "Angka bernilai falsy." akan ditampilkan.

**Catatan:**
- Operator NOT (`!`) sering digunakan untuk memeriksa nilai **falsy** seperti `false`, `0`, `""` (string kosong), `null`, `undefined`, atau `NaN`.
- Gunakan operator ini untuk membalikkan logika dalam kondisi tertentu.

### Switch Sebagai Alternatif If Statement

**Switch Statement** adalah struktur kontrol yang digunakan untuk membuat keputusan berdasarkan nilai tertentu. Switch sering digunakan sebagai alternatif dari **if-else if** ketika ada banyak kondisi yang harus diperiksa.

**Sintaks Dasar:**
```javascript
switch (ekspresi) {
  case nilai1:
    // kode yang dijalankan jika ekspresi === nilai1
    break;
  case nilai2:
    // kode yang dijalankan jika ekspresi === nilai2
    break;
  default:
    // kode yang dijalankan jika tidak ada case yang cocok
}
```

**Penjelasan:**
- **`ekspresi`**: Nilai yang akan diperiksa.
- **`case`**: Setiap nilai yang mungkin cocok dengan ekspresi.
- **`break`**: Digunakan untuk menghentikan eksekusi setelah case yang cocok ditemukan.
- **`default`**: Blok kode yang dijalankan jika tidak ada case yang cocok (opsional).

**Contoh:**
```javascript
let hari = 3;

switch (hari) {
  case 1:
    console.log("Hari ini adalah Senin.");
    break;
  case 2:
    console.log("Hari ini adalah Selasa.");
    break;
  case 3:
    console.log("Hari ini adalah Rabu.");
    break;
  case 4:
    console.log("Hari ini adalah Kamis.");
    break;
  case 5:
    console.log("Hari ini adalah Jumat.");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu.");
    break;
  case 7:
    console.log("Hari ini adalah Minggu.");
    break;
  default:
    console.log("Hari tidak valid.");
}
```

**Penjelasan Contoh:**
- Jika nilai `hari` adalah `3`, maka outputnya adalah "Hari ini adalah Rabu."
- Jika nilai `hari` tidak cocok dengan case mana pun, maka blok `default` akan dijalankan.

**Switch dengan Beberapa Case yang Sama:**
```javascript
let nilai = "A";

switch (nilai) {
  case "A":
  case "B":
    console.log("Nilai Anda sangat baik.");
    break;
  case "C":
    console.log("Nilai Anda cukup.");
    break;
  case "D":
  case "E":
    console.log("Nilai Anda kurang.");
    break;
  default:
    console.log("Nilai tidak valid.");
}
```

**Penjelasan:**
- Jika nilai adalah `"A"` atau `"B"`, maka outputnya adalah "Nilai Anda sangat baik."
- Jika nilai adalah `"D"` atau `"E"`, maka outputnya adalah "Nilai Anda kurang."

**Catatan:**
- Gunakan **switch** jika Anda memiliki banyak kondisi yang memeriksa nilai yang sama.
- Jangan lupa menambahkan **`break`** untuk mencegah eksekusi berlanjut ke case berikutnya.
- Gunakan **`default`** untuk menangani nilai yang tidak sesuai dengan case mana pun.
- Switch lebih mudah dibaca dibandingkan dengan **if-else if** untuk kasus dengan banyak kondisi.
