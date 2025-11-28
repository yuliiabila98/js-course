// цикли

// while

// let a = 0;

// while (a < 5) {
//     a++;
//      console.log('a' , a);   
// }

// let a = 3;
// while (a) console.log(a--);

// do while 

// do {
//     console.log(a);
//     a++;
// } while (a < 5)


// for

// let i = 2

// for (; i < 10;) {
//     i*=2
//     console.log(i);  
// }

// let sum = 0; 
// while (true) {
//     let value = +prompt('Введіть число');
//     if (!value) break;

//     sum += value;
// }

// console.log("Сума:" + sum);

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 1) continue; // пропускає цю ітерацію і йде далі
//     console.log(i);
// }

// масиви

// let arr = [1, 2, 3, 4, 5];

// arr[2] = 'lemon';
// arr2 = [1, 'hello', {
//     city: 'Odesa'
// }]

// console.log(arr2);

// push додає елемент в кінець масиву
// arr2.push('tomato');

// pop видаляє останній елемент масиву
// arr2.pop()

// shift видаляє перший елемент масиву
// arr2.shift()

// unshift додає перший елемент в масив
// arr2.unshift('tomato')

// старий метод перебору
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); 
// }

// новий метод перебору
// for (let item of arr) {
//     console.log(item);
// }

// метод перебору якщо потрібен доступ до індексів
// for (let key in arr) {
//     console.log(key);
// }

// отримати доступ до вкладеності масиву
// let matrix = [
//     [[1,0], 2, 3],
//     [4, 5, 6],
//     [7,8,9],
// ]

// console.log(matrix[0][0][1]);

// копіювання примітивів
// let a = 5;
// let b = a;

// a = 10;

// console.log(a); // 10
// console.log(b); // 5

// копіювання масивів
// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);
// console.log(arr, arr2); // [1,2,3,4],  [1,2,3,4]

// видалення елементу всередині масиву
// let arr = ["a", "b", "c", "d", "e"];
// delete не підходить, бо видалиться значення, а клюс залишиться

// arr.splice(2, 2) // 3,4 елементи видаляться / splice(indexStart, amount)
// console.log(arr); // ["a", "b", "e"]

// let arr = ["a", "b", "c", "d", "e"];
// arr = arr.slice(1, 3) // slice(indexStart, indexEnd) / видалить 
// console.log(arr); // ["b", "c"] - вертає новий масив

// concat об'єднує масиви, створює новий окремий масив
// let a = [1, 2, 3]
// let b = [4,5,6]

// b = b.concat(a, 'test')
// console.log(b);

// indexOf - шукає індекс, 1й аргумент - searchElement, 2й аргумент - з якого індексу шукати
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.indexOf('c', 1));

// lastIndexOf - шукає індекс з іншого боку, справа наліво
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.lastIndexOf('c', 1));

// includes повертає true/false
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.includes('g'));

// const fruits = [
//     {
//         id: 0, name: 'orange'
//     },
//     {
//         id: 1, name: 'apple'
//     },
//     {
//         id: 2, name: 'banana'
//     },
//      {
//         id: 3, name: 'cherry'
//     },
// ]

// find після першого співпадіння далі не шукає
// console.log(fruits.find(item=> item.id < 2));

// filter видає всі наявні співпадіння
// console.log(fruits.filter(item => item.name === 'apple'));

// map викликає функцію для кожного елемента масиву і вертає новий масив з результатами
// let result = fruits.map(item => item.name.length);
// console.log(result);

// split розділяє строку в масив по комі або пробілу
// let names = 'Yuliia, Olya, Anna';
// let arr = names.split(', ');
// console.log(arr);

// join з масиву робить строку
// const arr = ['Yuliia', 'Olya', 'Anna']
// let new_string = arr.join(', ')
// console.log(new_string);


// let arr = [1,2,3,4,5,6,7,8,9]
// summ - акумулює результати попередніх дій
// 1 + 2 = 3 / 3 + 4 = 7 / 7 + 5 = 12 / 12 + 6 = 18 і тд
// let red = arr.reduce((sum, item) => sum + item)
// console.log(red);

// let arr = [23, 45, 18, 30, 95];
// let sum = arr.reduce((sum, item) => sum + item) / arr.length;
// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 2) {
// console.log(i);
// }

// Homework
// -- 1 --
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruits = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// let res = fruits.map(item => item.name);
// console.log(res);

// let arr = [];
// for (const fruit of fruits) {
//     arr.push(fruit.name)
// }
// console.log(arr);


// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 1) continue;
//     console.log(i);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }

// let i = 0;

// while (i < 5) {
//     console.log(`цифра ${i}!`);
//     i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let value;

// while (true) {
//   value = prompt('Введіть число більше за 100'); 
  
//   if (value === null || value === '') { 
//     break;
//   }
  
//   let num_value = +value; 

//   if (num_value > 100 && !isNaN(num_value)) {
//     break;
//   }
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// let ages = girls.map(item => item.age);
// let result = ages.reduce((sum, item) => sum + item) / ages.length;
// console.log(result);

// let ages = girls.reduce((sum, item) => {
//     return (sum + item.age)
// }, 0)
// const result = ages / girls.length
// console.log(ages, result);



