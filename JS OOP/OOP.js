/*Constructor function*/
//Membuay Object dengan Object//
// const Fiky = {
// firstName: "Fiky"
// };
//
// const budi ={
// firstName: "budi",
// };

//code Constructor Function//
// function Person(){
// }

//Membuat Object dari Constructor Function//
// function Person(){
//
// }
//
// const fiky = new Person();

//Property di Constructor Function//
// function Person(){
// this.firstName = "";
// this.lastName = "";
// }
//
// const fiky = new Person();
// fiky.firstName = "Fiky";
// fiky.lastName = "Resya";
//
// console.log(fiky);

//Method di Contructor Function//
// function Person(){
// this.firstName = "";
// this.lastName = "";
// this.sayHello = function(name){
// console.info(`Hello ${name}, my name is ${this.firstName}`);
// }
// }
//
// fiky.sayHello("Resya");

//Parametter di Constructor Function//
//(Lebih simpel)
// function Person(firstName, lastName){
// this.firstName = "firstName";
// this.lastName = "lastName";
// this.sayHello = function(name){
// console.info(`Hello ${name}, my name is ${this.firstName}`);
// }
// }
//
// const fiky = new Person("Fiky", "Resya");

//Constructor Inheritance Function//
// funciton Employee(firstName){
// this.firstName = firstName;;
// this.sayHello = function(){
// console.info(`Hello Manager, my name is ${this.firstName}`);
// }
// }
//
// function Manager (firstName, lastName){
// this.lastName = lastName;
// Employee.call(this, firstName);
// }
//
// const fiky = new Manager("Fiky", "Resya");
// console.info(fiky);

//Prototype Object Intance//
// function Person(firstName, lastName){
// this.firstName = "firstName";
// this.lastName = "lastName";
// this.sayHello = function(name){
// console.info(`Hello ${name}, my name is ${this.firstName}`);
// }
// }
//
// const fiky = new Person("Fiky", "Resya");

//Menambah Property ke Instance Object//
// function Person(firstName, lastName){
// this.firstName = "firstName";
// this.lastName = "lastName";
// this.sayHello = function(name){
// console.info(`Hello ${name}, my name is ${this.firstName}`);
// }
// }
//
// const fiky = new Person("Fiky", "Resya");
// fiky.sayBye = function (){
// console.info(`Bye ${this.firstName}`);
// }
//
// console.log(fiky);

//Menambahkan Property ke Prototype//
// function Person(firstName, lastName){
// this.firstName = "firstName";
// this.lastName = "lastName";
// this.sayHello = function(name){
// console.info(`Hello ${name}, my name is ${this.firstName}`);
// }
// }
//
// Person.prototype.sayBye = function (){
// console.info(`Good Bye`);
// }
//
// Person.prototype.run = function (){
// console.info(`${this.firstName} is running`);
// }
//
// const fiky = new Person("Fiky", "Resya");
// console.log(fiky);
//
// fiky.sayBye();
//
// fiky.run();

//Prototype Inheritance (Salah)//
// function Employee(name) {
// this.name = name;
// }
//
// function Manager (name) {
// this.name = name;
// }
//
// Manager.prototype = Employee.prototype; "Salah dibagian ini"
//
// Manager.prototype.sayHello = function (name) {
// console.info(`Hello ${name}, my name is Manager ${this.name}`);
// }
//
// Employee.prototype.sayHello = function (name) {
// console.info(`Hello ${name}, my name is Employee ${this.name}`);
// }
//
// const employee = new Employee ("Fiky");
// employee.sayHello("Resya");
//
// const manager = new Manager ("Fiky");
// manager.sayHello("Resya");

//console.info("Employee");
//console.info("Manager");

//Prototype Inheritance (Benar)//
// function Employee(name) {
// this.name = name;
// }
//
// function Manager (name) {
// this.name = name;
// }
//
// Manager.prototype = Object.create(Employee.prototype); "Dibagian ini yang diperbaiki"
//
// Manager.prototype.sayHello = function (name) {
// console.info(`Hello ${name}, my name is Manager ${this.name}`);
// }
//
// Employee.prototype.sayHello = function (name) {
// console.info(`Hello ${name}, my name is Employee ${this.name}`);
// }
//
// const employee = new Employee ("Fiky");
// employee.sayHello("Resya");
//
// const manager = new Manager ("Fiky");
// manager.sayHello("Resya");

//console.info("Employee");
//console.info("Manager");

//Membuat class//
// class Person () {
//
// }
//
// const fiky = new Person();
// console.info("fiky");

//Constructor di Class//
// class Person () {
// constructor(name) {
//kode apapun
// console.info(`Membuat Person ${name}`);
// }
//
// }
//
// const fiky = new Person("Fiky");
// console.info("fiky");
//
// const resya = new Person("Resya",);
//
//Property di Class//
// class Person {
//
// constructor(name) {
// this.name = name;
// }
//
// }
//
// const fiky = new Person("Fiky");
// console.info(fiky);
// console.info(fiky.name);
//
// const resya = new Person("Resya",);
//
//Method di Class//
// class Person {
//
// constructor(name) {
// this.name = name;
// }
//
// sayHello(name) {
// console.info(`Hello ${name}, my name is ${this.name}`);
// }
//
// }
//
// const fiky = new Person("Fiky");
// console.info(fiky);
//
// fiky.sayHello("Resya");
//
//Class inheritance//
// class Employee {
// sayHello(name) {
// console.info(`Hello ${name}, my name is employee${this.name}`);
// }
// }
//
// class Manager extends Employee {
// sayHello(name) {
// console.info(`Hello ${name}, my name is employee${this.name}`);
// }
// }
//
// const fiky = new Employee();
// fiky.name = "Fiky";
// fiky.sayHello("Resya");
//
// const adit = new Manager();
// adit.name = "adit";
// adit.sayHello("Resya");
//
// console.info(fiky);
// console.info(adit);

//Super Constructor//
// class Employee {
// constructor(firstName) {
// this.firstName = firstName;
// }
// sayHello(name) {
// console.info(`Hello ${name}, my name is employee${this.firstName}`);
// }
// }
//
// class Manager extends Employee {
// constructor(firstName, lastName) {
// super(firstName);
// this.lastName = lastName;
// }
// sayHello(name) {
// console.info(
// `Hello ${name}, my name is employee${this.firstName} ${this.lastName}`
// );
// }
// }
//
// const fiky = new Employee("Fiky");
// fiky.sayHello("Resya");
//
// const adit = new Manager("Adit", "kanedy");
// adit.sayHello("Resya");
//
// console.info(fiky);
// console.info(adit);

//Super Method//
// class Shape {
// paint() {
// console.info("Paint Circle");
// }
// }
//
// class Circle extends Shape {
// paint() {
// super.paint();
// console.info("Paint Circle");
// }
// }
//
// const circle = new Circle();
// circle.paint();
//
//Getter dan Setter di Class//
// class Person {
// constructor(firstName, lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
//
// get fullName() {
// return `${this.firstName} ${this.lastName}`;
// }
//
// set fullName(value) {
// const [firstName, lastName] = value.split(" ");
// this.firstName = result[0];
// this.lastName = result[1];
// }
// }
//
// const fiky = new Person("Fiky", "Resya");
// console.info(fiky);
// console.info(fiky.fullName);
//
// eko.fullName = "Adit Nugraha";
// console.info(fiky);
//
//Public Class Field//
// class Costomer {
//
// firstName;
// lastName;
// balance = 0;
//
// constructor() {
// }
//
// sayHello(){
//
// }
// }
//
// const fiky = new Customer();
// console.info(fiky);

//Public Class Field dan Constructor//
// class Costomer {
//
// firstName;
// lastName;
// balance = 0;
//
// constructor(firstName, lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
//
// sayHello(){
//
// }
// }
//
// const fiky = new Customer("Fiky", "Resya");
// console.info(fiky);
//
//Private Class Field//
// class Counter {
//
// #counter = 0;
//
// increment(){
// this.#counter++;
// }
//
// decrement(){
// this.#counter--;
// }
//
// get(){
// return this.#counter;
// }
//
// }
//
// const counter = new Counter();
//
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
//
// console.info(counter.get());
//
// counter.counter = 100;
//
// console.info(counter);
//
//Class: Private Methods//
// class Person {
//
// say(name){
// if(name){
// this.#sayWithNamw(name);
// }else{
// this.#sayWithoutName();
// }
// }
//
// #sayWithoutName(){
// console.info("Hello");
// }
//
// #sayWithNamw(name){
// console.info(`Hello ${name}`);
// }
//
// }
//
// const person = new Person();
// fiky.say("Resya");

//Operator instanceof//
// class Employee{
//
// }
//
// class Manager{
//
// }
//
// const fiky = new Employee();
// const adit = new Employee();
//
// console.info(typeof fiky);
// console.info(typeof adit);
//
// console.info(fiky instanceof Employee);//true
// console.info(fiky instanceof Manager);//false
//
// console.info(adit instanceof Manager);//false
// console.info(adit instanceof Manager);//true
//
//Static Class Field//
// class Configuration {
// static name "Belajar JavaScript OOP";
// static version "1.0";
// static author = "Eko Kurniawan";
// }
//
// const config = new Configuration();
// console.info(config);
//
// Configuration.author = "Eko Kurniawan";
//
// console.info(Configuration.name);
// console.info(Configuration.version);
// console.info(Configuration.author);

//Static Method//
// class MathUtill {
// static sum(....numbers){
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
// }
//
// const reuslt = MathUtill.sum(1, 1, 1, 1, 1);
// console.info(result);

//Throw Error//
// class MathUtill {
//
// static sum(....numbers){
//
// if(numbers.length === 0){
// throw new Error("Total parameter harus lebih dari 0");
// }
//
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
//
// }
//
// console.info(MathUtil.sum());
// console.info(fiky);
//
// const result = MathUtill.sum(1, 1, 1, 1, 1);
// console.info(result);

//Error Handling//
// class MathUtill {
//
// static sum(...numbers){
//
// if(numbers.length === 0){
// throw new Error("Total parameter harus lebih dari 0");
// }
//
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
//
// }
//
// try {
// console.info(MathUtil.sum());
// console.info("Fiky");
// } catch (error) {
// console.error(`Terjadi error : ${error.message}`);
// }
//
// console.info("Resya");

//Finaly//
// class MathUtill {
//
// static sum(...numbers){
//
// if(numbers.length === 0){
// throw new Error("Total parameter harus lebih dari 0");
// }
//
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
//
// }
//
// try {
// console.info(MathUtil.sum());
// console.info("Fiky");
// } catch (error) {
// console.error(`Terjadi error : ${error.message}`);
// }finally { //Mau ngeluarin atau mengekskusi code sesuatu program error ataupun tidak finaly akan tetap muncul
// console.info("Program selesai")
// }
//
// console.info("Resya");

//Try Finaly//
// class MathUtill {
//
// static sum(....numbers){
//
// if(numbers.length === 0){
// throw new Error("Total parameter harus lebih dari 0");
// }
//
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
//
// }
//
// try {
// console.info(MathUtil.sum());
// console.info("Fiky");
// } catch (error) {
// console.error(`Terjadi error : ${error.message}`);
// }finally { //Mau ngeluarin atau mengekskusi code sesuatu program error ataupun tidak finaly akan tetap muncul
// console.info("Program selesai")
// }
//
// console.info("Resya");
//
// class Counter {
//
//
// #counter = 0;
//
// next (){
// try {
// return this.#counter;
// }finally {
// this.#counter++;
// }
// }
//
// }
//
// const counter = new Counter();
// console.info(counter.next());
// console.info(counter.next());
// console.info(counter.next());
// console.info(counter.next());
// console.info(counter.next());
//
//Membuat Class Error Manual//
//Class ValidationError//
// class ValidationError extends Error {
// constructor(message, field) {
// super(message);
// this.field = field;
// }
// }
//
// class MathUtill {
//
// static sum(...numbers){
//
// if(numbers.length === 0){
// throw new ValidationError("Total parameter harus lebih dari 0", "numbers");
// }
//
// let total = 0;
// for (const number of numbers){
// total += number;
// }
// return total;
// }
//
// }
//
// try {
// console.info(MathUtil.sum());
// console.info("Fiky");
// } catch (error) {
// if (error instanceof ValiationError){
// console.error(`Terjadi error pada field ${error.field} dengan error ${error.message}`);
// }else{
// console.info(`Terjadi error pada field ${error.message}`);
// }
// console.error(`Terjadi error : ${error.message}`);
// }finally {
// console.info("Program selesai")
// }
//
// console.info("Resya");

//Iterable dan Iterator
