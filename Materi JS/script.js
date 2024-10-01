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
/*//Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
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
/*function myFunction() {
    var carName = "Volvo";   // Function Scope
  }*/

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
/*var arr = ["mohamad", "fiky", "Bella"];
console.log(arr.join('-'));*/

//3.push & pop
/*arr.push('Doddy', 'Fitri');
//arr.pop();
//arr.pop();
console.log(arr.join('-'));*/

//4. unshift & shift
//arr.unshift('Doddy');
/*arr.shift();
console.log(arr.join('-'));*/