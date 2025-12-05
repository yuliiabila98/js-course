// =======================================

// class CircleBox {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }

//     show() {
//         this.$el.style.display = 'block';
//     }

//     hide() {
//         this.$el.style.display = 'none';
//     }
// }

// class CircleItem extends CircleBox {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = options.size + 'px';
//         this.$el.style.height = options.size + 'px';
//         this.$el.style.borderRadius = '50%';
//         this.$el.style.backgroundColor = options.color;
//     }
// }

// const CircleRed = new CircleItem({
//     selector: '#circle_red',
//     size: 100,
//     color: 'red'
// })

// const CircleGreen = new CircleItem({
//     selector: '#circle_green',
//     size: 150,
//     color: 'green'
// })


// const CircleYellow = new CircleItem({
//     selector: '#circle_yellow',
//     size: 200,
//     color: 'yellow'
// })

// =======================================
// через прототипи

// function Car(name, color) {
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.message = function () {
//     console.log(`${this.name} has ${this.color} color`);
    
// }

// Car.prototype.start = function () {
//     console.log(`${this.name} is start!`);
// }

// const BMW = new Car('bmw', 'red');
// const Mercedes = new Car('mercedes', 'white');


// =======================================
// Mixins

// let message = {
//     messageHello() {
//         console.log(`Hello, ${this.name}`);
//     },
//      messageBye() {
//         console.log(`Bye, ${this.name}`);
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, message);

// new User('Ivan').messageBye();

// =======================================
// ES6

// height = height ?? 100; // new
// height - height !== undefined && height !== null ? height : 100 // old

// =======================================
// Homework

// function Calculator() {
//     this.first_el = 0;
//     this.second_el = 0;

//     this.read = function () {
//         const input = prompt('Введіть два значення через кому.');

//         if (!input) {
//             console.log('Ви нічого не ввели.');
//             return;
//         }

//         const values = input.split(','); 

//         if (values.length !== 2) {
//             console.log('Неправильний формат введення.');
//             return;
//         }

//         this.first_el = +values[0];
//         this.second_el = +values[1];
        
//         if (isNaN(this.first_el) || isNaN(this.second_el)) {
//             console.log('Одне або два значення не є числами');
//             return;
//         }
//     }

//     this.sum = function () {
//         return this.first_el + this.second_el;
//     }

//     this.mul = function () {
//         return this.first_el * this.second_el;
//     }
// }

// let calc = new Calculator();