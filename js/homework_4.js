// function declaration

// function showMessage(name,city) {
//     console.log('hello' , name, 'from', city);
    
// }

// showMessage('Yuliia', 'Odesa');
// showMessage('Olga', 'Lviv');

// function expression

// const user_name = "Yulia"

// const sayHello = function () { 

//     let message = `Hello, my name is ${user_name}`
//     console.log(message);
    
// }

// sayHello();

// function with return

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(7, 3)
// console.log(result);

// const testFunc = function (a, b) {
//     console.log('a:', a);
//     console.log('b:', b);

//     c = a + b
    
//     return 100;
// }

// testFunc(5,9)

// порядок виконання коду

// const a = function () {
//     c();
//     console.log('function a');
//     b();
// }

// const b = function () {
//     console.log('function b');
// }

// const c = function () {
//     console.log('function c');
// }

// b();
// c();
// a();

// якщо невідомо скільки буде аргументів
// const add_name = function () {
//     const args = Array.from(arguments)
//     console.log(args);
// }
// add_name(1, 3, 5);
// add_name(1, 3, 5, 67, 90);

// rest інший спосіб взаємодіяти з невідомою кількістю аргументів
// const add_name = function (...args) {
//     console.log(args);
// }
// add_name(1, 3, 5);
// add_name(1, 3, 5, 67, 90);

// callback / hof (high order function) - функції зворотнього виклику, очікується що така функція буде викликана пізніше
// function ask(question, yes, no) {
//     if (confirm(question)) {
//             yes()
//     } else { 
//         no()
//     }
// } 

// function showOk() {
//     console.log('You say Yes');
// }

// function showCancel() {
//     console.log('You say No');
// }

// ask('Yes or No', showOk, showCancel)


// hof (high order function - функція, яка може приймати в себе або повертати як результат інші функції

// const hello = function (name) {
//     console.log(`Hello, ${name}`);   
// }

// const searchName = function (callback) {
//     const name = 'Yuliia';
//     callback(name);
// }
// searchName(hello)

// return
// function checkAge(age) {
//     if (age > 18) {
//         return console.log('Hello');
//     }

//     return console.log('Bye');   
// }

// checkAge(12);

// function showMovie(age) {
//     if (age < 21) {
//         return;
//     }
//     return console.log('go to movie');
    
// }

// showMovie(1)

// Стрілкові функції
// const test = (arg) => {
//     console.log(arg);
// }

// test('hall');

// const showMovie = (age) => {
//     if (age < 21) {
//         return console.log('too young');
//     }
//     return console.log('you can watch');
    
// }

// showMovie(29)

// Контексти і виклики

// const a = () => {
//     console.log('a');
// }

// const b = () => {
//     console.log('b');
// }

// const c = () => {
//     console.log('c');
//     a();
//     b();
// }

// c(); // c a b

// const addNumber = (number) => {
//     const sum = +number + 10
//     return console.log(sum);
//     ;
// }

// const number_ref = document.querySelector("input[name='number']")
// const button_ref = document.querySelector("button")

// button_ref.addEventListener('click', () => addNumber(number_ref.value));


// Homework

// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?')
//     }
// }

// function checkAge(age) {
//     return age > 18 ? true : confirm('Батьки дозволили?')
// }


// function checkAge(age) {
//     return age > 18 || confirm('Батьки дозволили?')
// }

// checkAge(5)

// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b
// function min(a, b) {
//     return a < b ? a : b;;
// }

// min(123,121)

// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижчи:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask('Ви згодні?', function () { alert('Ви погодились'); }, function () { alert('Ви скасували виконання')})

// 1
// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// const showOk = () => {
//     alert('Ви погодились');
// }

// const showCancel = () => {
//    alert('Ви скасували виконання')
// }

// ask('Ви згодні?', showOk, showCancel)

// 2
// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }

// ask('Ви згодні?', () => alert('Ви погодились'), () => alert('Ви скасували виконання'))