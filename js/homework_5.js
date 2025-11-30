// замикання

// function createNewSum(n) {
//     return function () {
//         console.log(10*n);
        
//     }
// }

// const calc = createNewSum(5);
// calc();

// =======================================

// function createNewNumber(n) {
//     return function (num) {
//         console.log(n, num);
//         return n + num;
//     }
// }

// const addFive = createNewNumber(5);
// console.log(addFive(20));

// =======================================

// function createUrl(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = createUrl('com');
// const comUa = createUrl('ua');
// console.log(comUrl('google')); // https://google.com
// console.log(comUrl('facebook')); // https://facebook.com
// console.log(comUa('google')); // https://google.ua
// console.log(comUa('facebook')); // https://facebook.ua

// =======================================

// this, context

// function hello() {
//     console.log('hello', this);
// }

// hello();

// const user = {
//     name: 'Yuliia',
//     city: 'Odesa',
//     sayHi: hello,
// }

// user.sayHi();

// =======================================

// function abc() {
//     console.log(this);
// }

// abc();

// document.querySelector('p').onclick = abc; // <p>Hello!</p>

// =======================================

// function changeColor() {
//     this.style.background = 'green';
// }

// document.querySelector('div').onclick = changeColor; // <div style="background: green"><p>Hello!</p></div>

// =======================================

// let user = document.querySelectorAll('div');
// user.forEach(function (el) { 
//     el.onclick = changeColor;
// })

// =======================================

// У стрілочній функції this немає:
// const showList = () => {
//     console.log(this);
// }

// const list = {
//     names: [
//         'Yuliia', 'Ann', 'Olga'
//     ],
//     showList: showList,
// }

// list.showList(); // document

// =======================================

// bind
// function hello() {
//     console.log(this);
// }

// const user = {
//     name: 'Yuliia',
//     age: '27',
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
// }

// user.hello(); // контекст user
// user.sayHelloWindow(); // window

// =======================================

// function hello() {
//     console.log(this);
// }

// const user = {
//     name: 'Yuliia',
//     age: 27,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`City is ${city}`);
        
//     }
// }

// user.info('Poltava');  // Name is Yuliia, Age is 27

// const Ann = {
//     name: 'Ann',
//     age: 30
// }

// const Natalia = {
//     name: 'Natalia',
//     age: 20
// }

// user.info.bind(Ann, 'Odesa')(); // Name is Ann, Age is 30, City is Odesa
// user.info.bind(Natalia)('Kyiv'); // Name is Natalia, Age is 20, City is Kyiv

// const annInfo = user.info.bind(Ann, 'Odesa');
// const nataInfo = user.info.bind(Natalia)('Kyiv');

// annInfo();
// nataInfo;

// =======================================

// call

// const userInfo = {
    // name: 'Yuliia',
    // age: 38,
    // logInfo: function (job) {
    //     console.group(`${this.name}'s info: `);
    //     console.log(`Name is: ${this.name}`);
    //     console.log(`Age is: ${this.age}`);
    //     console.log(`Job is: ${job}`);
    //     console.groupEnd();
    // }
// }

// const Vano = {
//     name: 'Ivan',
//     age: 45
// }

// userInfo.logInfo.call(Vano, 'developer'); // Ivan's info: Name is: Ivan, Age is: 45, Job is: developer

// =======================================

// apply

// const showUserInfo = {
//    name: 'Yuliia',
//     age: 58,
//     logInfo: function (job, city) {
//         console.group(`${this.name}'s info: `);
//         console.log(`Name is: ${this.name}`);
//         console.log(`Age is: ${this.age}`);
//         console.log(`Job is: ${job}`);
//         console.log(`City is: ${city}`);
//         console.groupEnd();
//     }
// }

// const Vano = {
//     name: 'Ivan',
//     age: 45
// }

// showUserInfo.logInfo.apply(Vano, ['developer', 'Odesa']); 

// =======================================
// practice

// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, ${stars}`);  
// }

// const Bukovel = {
//     hotel: 'Bukovel',
// }

// const Tourist = {
//     hotel: 'Tourist',
// }

// message.call(Bukovel, 'Yuliia', 5)
// message.call(Tourist, 'Kate', 3)

// message.apply(Bukovel, ['Yuliia', 5])
// message.apply(Tourist, ['Kate', 3])

// message.bind(Bukovel, 'Yuliia', 5)();
// message.bind(Tourist, 'Kate', 3)();

// Yuliia, Welcome to Bukovel, 5
// Kate, Welcome to Tourist, 3

// =======================================

// const cart = {
//     showItems: function (title) {
//         console.log(`В корзині ${title}: `, this.items);
//     }
// }

// const women = {
//     items: [
//         'Сукні', 'Туфлі'
//     ]
// }

// const men = {
//     items: [
//         'Поло', 'Рубашка'
//     ]
// }

// const kids = {
//     items: [
//         'Майка', 'Шорти'
//     ]
// }

// document.querySelector('#women').addEventListener('click', cart.showItems.bind(women, 'жінки'))
// document.querySelector('#men').addEventListener('click', cart.showItems.bind(men, 'чоловіка'))
// document.querySelector('#kids').addEventListener('click' , cart.showItems.bind(kids, 'дитини'))

// =======================================

// const infoCar = {
//     name: 'BMW',
//     model: 'M7',
//     color: 'white',
    // showInfo: function () {
    //     console.log(
    //         `Car: ${this.name}, model: ${this.model}, color: ${this.color}`
    //     );
    // }
// }

// const car2 = {
//     name: 'Nissan',
//     model: 'Nitro',
//     color: 'red',
// }

// infoCar.showInfo();
// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.apply(car2);
// infoCar.showInfo.call(car2);

// =======================================
// Homework

// --1--
// Написати об'єкт студента який буде виводити ім'я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student_a = {
//     name: 'Alex',
//     major: 'Computer Engineering',
//     average_score: 87,
//     missed_classes_num: 12,
// }

// const student_b = {
//     name: 'Olga',
//     major: 'Applied mathematics',
//     average_score: 94,
//     missed_classes_num: 5,
// }

// const student_c = {
//     name: 'Petro',
//     major: 'Psychology',
//     average_score: 77,
//     missed_classes_num: 16,
// }

// const showInfo = function () {
//         console.log(`Ім'я студента: ${this.name}, спеціальність: ${this.major}, середній бал: ${this.average_score}, кількість пропущених занять: ${this.missed_classes_num}`);
        
// }

// showInfo.bind(student_a)();
// showInfo.call(student_b);
// showInfo.apply(student_c);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це так

// const showInfo = function () {
//     console.log('Description: ' + this.text); 
// }

// const HTMLtext = { text: 'HTML, which stands for HyperText Markup Language, is the standard language used to create and structure web pages and their content'}

// const CSStext = { text: 'CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML.' }


// document.querySelector('#css').addEventListener('click', showInfo.bind(CSStext));
// document.querySelector('#html').addEventListener('click', showInfo.bind(HTMLtext));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = function (item_title, kg_price, item_amount) {
//     const final_price = parseFloat(kg_price) * parseFloat(item_amount);
//     const result = `Назва товару: ${item_title}, вартість: ${final_price.toFixed(2)}`
//     console.log(result);

//     return result;
// }
// shop('banana', '30', '4.5'); // 135.00
// shop('cherry', '58', '1.3'); // 75.40
// shop('orange', '89', '3.4'); // 302.60
