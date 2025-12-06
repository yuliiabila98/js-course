// console.log('1');

// setTimeout(() => (console.log('2'), 1));

// console.log('3');

// const hello = () => {
//     console.log('hello');
// }

// const timeout = setTimeout(hello, 1000);

// clearTimeout(timeout)

// const hello = () => {
//     console.log('hello');
// }

// const setInt = setInterval(hello, 5000)

// const start_btn = document.querySelector('#start');
// const stop_btn = document.querySelector('#stop');

// let time = null;

// start_btn.addEventListener('click', () => {
//     time = setInterval(() => {
//         console.log('start');
//     }, 1000)
// })

// stop_btn.addEventListener('click', () => {
//     clearInterval(time);
//     console.log('stop');
// })

// const obj = {
//     classic() {
//         setTimeout(function() {
//             console.log(`${this}, classic in object`);
//         });
//     },
//     arr() {
//         setTimeout(() => {
//             console.log(`${this}, arr in object`);
//         })
//     }
// }

// obj.classic(); // [object Window], classic in object
// obj.arr(); // [object Object], arr in object

// const date = new Date('March, 10, 2023');
// const date = new Date(2023, 4, 12, 15, 16, 2, 7);
// console.log(date);

// const unixDate = new Date(1765056764241);
// console.log(unixDate);

// const newUnixDate = Date.now();
// console.log(newUnixDate);

// const date = new Date();

// console.log(date.getDate());

// console.log(date.getMonth());

// console.log(date.getFullYear());

// const ukr = date.toLocaleString('Uk-uk');
// console.log(ukr);


// -----------------------------
// promises

// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('resolve')
//     }, 1000);
//     setTimeout(() => {
//         reject('reject')
//     }, 1000);
// });

// prom.then(
    // (resolve) => console.log('resolve'),
    // (reject) => console.log('reject')
// )

// prom.catch(alert);

// prom.finally();


// function load(src) {
//     return new Promise(
//         function (resolve, reject) {
//             let script = document.createElement('script');
//             script.src = src;

//             script.onload = () => resolve(script);
//             script.onerror = () => reject(new Error(`Error ${script}`));

//             document.head.append(script);
//         }
//     )
// }

// let prom = load('https://www.youtube.com/watch?v=0TvQRawmbBY')

// prom.then(
//     (script) => console.log(`Download ${script}`),
// )

// prom.catch(
//     (error) => console.log(`Error ${error.message}`)
// )

// prom.finally(
//     console.log('Finally')
// );


// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve(2)
//     }, 1000)
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(result+5)
//         }, 1000);
//     })
// }).then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(result+5)
//             }, 1000);
//         })
//     }).then(function (result) {
//         console.log(result);
//     })

// homework

// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout

// function printNumbers(from, to) {
//     let current = from;

//     function go() {
//         console.log(current);

//         if (current < to) {
//             current++;
//             setTimeout(go, 1000)
//         }
        
//     }

//     go();
// }

// function printNumbers(from, to) { 
//     let current = from;

//     setInterval(() => {
//         if (current < to) {
//             console.log(current)
//             current++;
//         }
//     }, 1000)
// }

// printNumbers(1, 10);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

// function delay(ms) {
//     return new Promise(
//         function (resolve) {
//             setTimeout(() => {
//                 resolve();
//             }, ms);
//         }
//     )
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));
