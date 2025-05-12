//Angka//
//10, 1500, 123456 (akurat sampe 15 digit)

//Angka dengan desimal
//3.14, 0.5, 100.00

//Eksponen
//123e5//12300000//
//123e-5//0.00123//

//Angka spesial//
//infinity = 2/0
//-infinity = -2/0
//NaN = 0/0 - 100/"apel"

//Tipe data//
//String
//Number
//Bigint
//Boolean
//Undifined
//Symbol
//Object

//Contoh//
/*Numbers:
let length = 16;
let weight = 7.5;

=Strings:
let color = "Yellow";
let lastName = "Johnson";

=Booleans
let x = true;
let y = false;

=Object:
const person = {firstName:"John", lastName:"Doe"};

=Array object:
const cars = ["Saab", "Volvo", "BMW"];

=Date object:
const date = new Date("2022-03-25");*/

//Variable//
//var = isinya bisa dapat diubah,
//let = isinya dapat diubah (sekarang kebanyakan pake ini),
//const = data tidak dapat diubah

//Pop box//
//alert('') : sering digunakan jika Anda ingin memastikan informasi sampai kepada pengguna (Saat kotak peringatan muncul, pengguna harus mengklik "OK" untuk melanjutkan).
//confirm('') : digunakan untuk meminta pengguna untuk memilih antara "OK" atau "Batal".
//prompt('') : digunakan untuk meminta pengguna untuk memasukkan  nilai sebelum memasuki halaman.

//Control flow//
//loop//
/*Menggunakan for : 
for (let i = 0; i < 5; i++) {text += "The number is " + i + "<br>";}
Loop scope : let i = 5;
for (let i = 0; i < 10; i++) {
    // some code
  }
  // Here i is 5*/
/*Menggunakan While : 
while (i < 10) {
  text += "The number is " + i;
  i++;
}*/
/*Menggunakan Do while :
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);*/

//Pengkondisian//
/*if : let hour = new Date().getHours();
if (hour < 20) {
  document.getElementById("demo").innerHTML = "Good day";
}*/

/*if else : let hour = new Date().getHours();
if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}*/

/* else if : var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}*/

//Operator Logica//
/*
const password = prompt('Masukkan password');

//Memasukkan password 6 karakter//
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        alert('Password valid');
    } else {
        alert('Password tidak boleh spasi');
    }
}
*/

//Operator Logic And//
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     alert('Password valid');
// } else {
//     alert('Password invalid');
// }

//Operator Logika Or//
// const role = prompt('Masukkan Admin atau spv');

// if (role === 'Admin' || role === 'spv') {
//     alert('Boleh mengakses');
// } else {
//     alert('Tidak boleh mengakses');
// }

//Switch//
/*var text;
var fruits = document.getElementById("myInput").value;

switch(fruits) {
  case "Banana":
    text = "Banana is good!";
    break;
  case "Orange":
    text = "I am not a fan of orange.";
    break;
  case "Apple":
    text = "How you like them apples?";
    break;
  default:
    text = "I have never heard of that fruit...";
}*/

//Function//
// Declare a function
/*function myFunction(parameter) {
    document.getElementById("demo").innerHTML = "Hello World!";//argumen
  }
  
  // Call the function
  myFunction(); */

//Refactoring = mempersingkat atau membuat code menjadi cleancode

//Variable Global scope
/*let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}*/

//Func scope//
/*
let linux = "RedHat"

function easyLinux() {
  let linux = "Ubuntu"
  console.log(linux); // Ubuntu
}

console.log(linux)//RedHat
/*/

//Block Scope//
/*
let tinggi = 8;

if (tinggi > 5) {
  let lebar = 10;
  console.log(lebar); //10
}
console.log(tinggi); //8
console.log(lebar); //ReferenceError: lebar is not defined

for (let i = 0; i < 5; i++) {
  const indexNumber = i;
  console.log(indexNumber); //0,1,2,3,4
}

console.log(indexNumber); //ReferenceError: indexNumber is not defined
*/

//Lexical Scope//
/*
function lamarKerja() {
  const jabatnya = 'Programmer';
  function dalamKerja() {
  let kenalan = `Orang dalam bisa memasukkan ${jabatnya}`;
    console.log(kenalan);
  }
  orangDalam();
}
  console.log(lamarKerja()); //ReferenceError: a is not defined
*/

//Rekursif//
/*function cetakAngka(n) {
    if( n === 0){
    return;
    }
    console.log(n);
    cetakAngka(n-1);
    }

    cetakAngka(10);*/

//Function Declaration//
/*function tampilanPesan (nama) {
alert('halo' + nama);
}*/

//Function Expresion (paling banyak digunakan karena sekarang juga ada functional programming karena sudah menggunakan itu)//
/*let tampilanPesan + function (nama) {
alert('halo' + nama);
}*/

//Manipulasi Array//
//1. length
//Menampuilkan isi array
/*var arr = ["mohamad", "fiky", "Bella"];

for(var i = 0; 1 < arr.length; i++) {
console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr[1]);
}*/

//2. join
//console.log(arr.join('-'));

//3.push & pop
/*arr.push('Doddy', 'Fitri');
//arr.pop();
//arr.pop();
console.log(arr.join('-'));*/

//4. unshift & shift
//arr.unshift('Doddy');
/*arr.shift();
console.log(arr.join('-'));*/

//var arr = ["mohamad", "fiky", "Bella"];
//5. Slice dan Splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
//arr.splice(2, 0, 'Doddy');
//arr.splice(1, 2, 'Doddy', 'Fitri);
//console.log(arr.join('-'));

//6. slice(awal, akhir);
//var arr = ['Fiky', 'Evvi', 'Lia', 'Doddy','Fitri'];
//var arr2 = arr.slice(1, 3);
//console.log(arr.join('-'));
//console.log(arr2.join('-'));

//7. Forench
// let angka = (1,2,3,4,5,6,7,8);
// var nama = ['Fiky', 'Bella', 'Yohan'];
/*for (var i = 0; i < angka.length; i++) {
console.log(angka[1]);
}*/
// angka.forEach (function(e) {
// console.log(e);
// });
/* nama.forEach(function(e, i) {
  console.log('Mahasiswa ke-' + i + 'adalah :' + e);
});*/

//7. Map
/*var angka = [1,2,5,3,6,8,4];
var angka2 = angka.map(function(e) {
  return e * 2;
});
console.log(angka2.join('-'));*/

//8. Sort
/*var angka = [1,2,5,3,6,8,4];
angka.sort();
console.log(angka.join('-'));*/

/*var angka = [1,2,10,5,20,3,6,8,4];
angka.sort(function(a,b){
return a-b;
})
console.log(angka.join('-'));*/

//9. Filter
/*var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.filter(function(x) {
  return x > 5;
});
console.log(angka2.join('-'));*/

//10.find
/*var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
  return x > 5;
});
console.log(angka2);*/

//11. Every dan some
/* 
const kataKata=['kita', 'adalah', 'mahasiswa'];
kata.every(kaya => {
  return kaya.length > 3;
}
) //true

const kataKata=['kita', 'adalah', 'mahasiswa'];
kata.some(kaya => {
  return kaya.length > 3;
}
) //true
*/

//12. Reduce
/*
const subtotal = [1500,20000,4000,19000,32000];

const total = subtotal.reduce((curentTotal, singleSubtotal) => {return curentTotal + singleSubtotal});
Proses 1|1500 + 20000 = 21500
Proses 2|21500 + 4000 = 25500
dst.
*/

//Object//
//Membuat project
//Object Literal
/*var mhs1 = {
  nama : 'Mohamad Fiky',
  nim : '1234567890',
  umur : 19,
  jurusan : 'Teknik Informatika'
}

var mhs2 = {
  nama : 'Bella',
  nim : '1234567890',
  umur : 20,
  jurusan : 'Perawat'
}*/

//Function Declaration
/*function buatObjectMahasiswa(nama, nim, umur, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.umur = umur;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa('Yohan', '1234567890',22, 'Teknik Informatika');*/

//Constructor

/*function saya= {
  nama = 'Mohamad Fiky',
  nim = '1234567890',
  umur = 19,
  jurusan = 'Teknik Informatika'
  mahasiswa = function() {
    console.log('Halo, nama saya ' + this.nama + ', nim saya ' + this.nim + ', umur saya ' + this.umur + ', jurusan saya ' + this.jurusan);
  }
}
*/

//Objek This dalam arrow function mengarah pada objek global window//
/* 
function saya= {
  nama = 'Mohamad Fiky',
  nim = '1234567890',
  mahasiswa: () => {
    return `${this.nama} ${this.nim}`;//akan undifined undifined karena this mengarah pada window object
  }

  panggilNanti: () => {
    setTimeout(() => {
      console.log(this.nama + ' ' + this.nim);
    }, 1000); //akan mengeluarkan undefined undefined karena this mengarah pada window object
}

jika ingin menggunakan objek seperti ini maka menggunakan function biasa
function saya= {
  nama = 'Mohamad Fiky',
  nim = '1234567890',
  mahasiswa: function() {
    return `${this.nama} ${this.nim}`;
  }
}
*/

//Mebuat Object
//cara1 - function declaration
/*function halo() {
  console.log('halo');
}
halo;*/

//cara2 - object literal
/*var obj = {};
obj.halo = function() {
  console.log('halo');
}
obj.halo();*/

//cara3 - constructor
/*function Halo() {
  console.log('halo');
}
new Halo();*/

//This//
/*var a = 10;
console.log(window.a);*/

//cara1 - function declaration
/*function halo() {
  console.log(this);
  console.log('halo');
}
halo;*/
//This mengembalikan object Global

//cara2 - object literal
/*var obj = {a : 10, nama : 'Fiky};
obj.halo = function() {
  console.log(this);
  console.log('halo');
}
obj.halo();*/
//This mengembalikan obect yang bersangkutan

//cara3 - constructor
/*function Halo() {
  console.log(this);
  console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();*/
//This mengembalikan object yang baru dibuat

//Pengkodisian//
//ketika didalam try terdapat eror maka akan mengeluarkan suatu nilai yang berada dalam catch//
/* 
function teriak(msg){}
try {
  console.log(msg.toUpperCase());
}catch(eror){
  console.log('error');
  console.log(Silahkan masukannkan pesan tipe data string');
}
}*/

//Set Timeout & setinterval//
/* 
setTimeout(() => {
  console.log('Hello World!');
} , 2000); //Proses akan dieksekusi setelah 2 detik

setInterval(() => {
  console.log('Hello World!');
}, 2000); //Akan melkakukan proses secara berulang setiap 2 detik
clearInterval() untuk menghentikan setInterval
*/

//Default Value Parameter//
//Default value parameter adalah nilai default yang diberikan pada parameter function jika tidak ada argumen yang diberikan saat memanggil function tersebut. Jika argumen diberikan, maka nilai default akan diabaikan dan argumen yang diberikan akan digunakan sebagai nilai parameter.//
/*
SALAH!!
function perjalian (a,b){
b = typeof b !== 'undefined' ? b : 1;
return a * b;
}

BENER!!
function tambah(a, b = 0) {
  return a + b;// console.log(tambah(5, 10)); //15 
}
*/

//spread opeator pada function//
//mengubah suatu array atau objek atau bahkan string menjadi deet parameter untuk function//
/*
cosnt angka = [1,2,3,4]
Math.mx(angka); //NaN
Math.max(...angka); //4
isinya sama seperti
Math.max(1,2,3,4);//4
*/

//Merge array dengan spread operator//
/*
const angka = [1,2,3,4];
const nama = [FIKY, BELLA, YOHAN, RECA];
const campuran = [...angka, ...nama];
console.log(campuran); //1,2,3,4,FIKY,BELLA,YOHAN,RECA


const user = {
  name: 'FIKY',
  age: 19,
  
}

const userDb = {...user, role: 'admin'};
console.log(userDb); //{name: 'FIKY', age: 19, role: 'admin'}
*/

//rest param//
//rest parameter adalah fitur pada JavaScript yang memungkinkan kita untuk mengumpulkan argumen yang tidak terbatas menjadi sebuah array. Ini berguna ketika kita tidak tahu berapa banyak argumen yang akan diterima oleh fungsi kita.//
/*
const nama = ['FIKY', 'BELLA', 'YOHAN', 'RECA', 'FITRI', 'DODDY'];

const pemenang = (gold, silver, ...sisaJuara) => {
*/

//DESTRUCTING//
/*Destructuring adalah fitur pada JavaScript yang memungkinkan kita untuk mengekstrak nilai dari array atau objek dan menyimpannya ke dalam variabel dengan cara yang lebih mudah dan ringkas. Ini sangat berguna ketika kita bekerja dengan data yang kompleks, seperti objek atau array bersarang.*/
/*
ARRAY
const peserta = ['Batman', 'Ironman', 'Spongebob'];
const [ketua, wakil, ...anggota] = peserta;

cosnt [juara, ...peserta] =peserta;

const nama = ['FIKY', 'BELLA', 'YOHAN', 'RECA', 'FITRI', 'DODDY'];
const [ketua, wakil, ...anggota] = nama;

OBJEK
/*const orang = {
  nama: 'FIKY',
  email: 'fiky@gmail.com',
  role: 'Admin',
}
const { nama, umur} = orang; //bisa mengubah name menjadi nama dengan cara {name: nama} ketika ingin menambahlan variabel baru bisa dengan {phone = 0812341234}

Bongkar properti Objek bida dilakukan didalam function
cost userAndRole = ({name, role}) => {
  return `${name} ${role}`;//FIKY Admin
}

const animes = {
  {
    title: 'Naruto',
    rating: 8.5,
    genre: 'Action',
    year: 2002,
  },
  {
    title: 'One Piece',
    rating: 9.0,
    genre: 'Adventure',
    year: 1999,
  },
  {
    title: 'Attack on Titan',
    rating: 9.5,
    genre: 'Action',
    year: 2013,
  },
  {
    title: 'Death Note',
    rating: 9.8,
    genre: 'Mystery',
    year: 2006,
  },
}

cosnt anime = animes.map((anime) => return `${anime.title} (${anime.year}) rating ${anime.rating}`); OR cosnt anime = animes.map(title, year, rating) => return `${title} (${year}) rating ${rating}`);
*/
