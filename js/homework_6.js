// процедурне програмування
// const sum = 20000;
// const months = 36;
// const payment = 500;

// const credit = (sum, date, payment) => {
//     return sum + payment * date;
// }

// console.log(credit(sum, months, payment));

// ООП
// const credit = {
//     sum: 20000,
//     months: 12,
//     payment: 1300,
//     result() {
//         return this.sum + this.payment * this.months
//     }
// }

// console.log(credit.result());

// Класи

// class Bank {
//     static type = 'Privat';

//     constructor(options) {
//         this.sum = options.sum;
//         this.months = options.months;
//         this.payment = options.payment;
//     }

//     credit() {
//         return console.log('i am privat');
        
//     }
// }

// const userBank = new Bank({
    // sum: 30000,
    // months: 5,
    // payment: 500
// })

// userBank.creditSum();
// console.log(Bank.type);

// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     }

//     credit() {
//         super.credit();
//         console.log('i am aval');
        
//     }
// }

// const aval = new NewBank({
//     sum: 40000,
//     months: 5,
//     payment: 500,
//     card: true
// })

// console.log(aval.card);
// aval.credit(); // 'i am privat', ' i am aval'

// =======================================

// get & set

// class User {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.city = props.city;
//     }

//     first_name = '';
//     last_name = ''
//     age = '';
//     city = '';

//     set name(new_name) {
//         const name_row = new_name.split(' ');
//         this.first_name = name_row[0];
//         this.last_name = name_row[1];
//     }

//     get name() {
//         return `First name: ${this.first_name}, last name ${this.last_name}`
//     }
// }

// const Yuliia = new User( {
//     name: 'Yuliia Bila',
//     age: 27,
//     city: 'Odesa'
// })

// const Daria = new User( {
//     name: 'Daria Rogovets',
//     age: 25,
//     city: 'Poznan'
// })

// console.log(Yuliia); // User {first_name: 'Yuliia', last_name: 'Bila', age: 27, city: 'Odesa'}
// console.log(Daria); // User {first_name: 'Daria', last_name: 'Rogovets', age: 25, city: 'Poznan'}

// =======================================
// objects

// const a = {
//     x: 1,
//     y:2
// }

// const b = Object.create(a);

// console.log(a.hasOwnProperty('x'), b.hasOwnProperty('x'));

// =======================================

// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

//     this.sale = function () {
//         this.sales += 1;
//     } // так краще не робити, бо жере пам'ять і якщо буде 1000 менеджерів, буде 1000 функцій sale
// }

// const Ann = new Manager('Ann', 5);
// const Taras = new Manager('Taras', 10);

// Manager.prototype.sale = function () {
//     this.sales += 1;
// } // отак добре через прототипи, одна функція скопійована по посиланню

// console.log(Taras.sales);
// Taras.sale();
// console.log(Taras.sales);

// console.dir(Manager);

// =======================================

// class CoffeeMachine {
//     _water = 0; // захищене поле / тільки для читання
//     #water_limit = 500; // приватні поля
    
//     constructor(power) {
//         this.power = power;
//     }

//     set waterAmount(value) {
//         if (value < 0) {
//             value = 0;
//         }

//         this._water = value
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);

// coffeeMachine.waterAmount = 20;
// console.log(coffeeMachine); // CoffeeMachine {_water: 20, power: 100, #water_limit: 500}
// coffeeMachine.waterAmount = -20;
// console.log(coffeeMachine); // CoffeeMachine {_water: 0, power: 100, #water_limit: 500}


// Homework

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//     constructor(name, tel_number) {
//         this.name = name;
//         this.tel_number = tel_number;
//     }

//     set telephone(new_tel_number) {
//         if (parseFloat(new_tel_number)) {
//             this.tel_number = new_tel_number;
//         }
//     }

//     get telephone() {
//         return this.tel_number;
//     }

//     get info() {
//         return `Абонент: ${this.name}, Номер: ${this.telephone}`;
//     }
// }

// const Yuliia = new Abonent('Yuliia', '0995659123')
// const Darya = new Abonent('Darya', '0958632468')
// const Kostya = new Abonent('Kostya', '0633702766')

// console.log(Yuliia.info);
// console.log(Darya.info);
// console.log(Kostya.info);

// Yuliia.telephone = 'asjkdhkas'
// console.log(Yuliia.telephone); // 0995659123
// Yuliia.telephone = '278361123'
// console.log(Yuliia.telephone); // 278361123




