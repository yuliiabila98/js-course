// const is_conform = confirm('please help')
// console.log(is_conform);

// const user_name = prompt('please enter a number')
// console.log(typeof user_name); // string
// console.log(user_name);

// let value;
// value = false;
// console.log(typeof value);

// const new_value = String(value);
// console.log(typeof new_value);


// boolean ставить false на 0, '', null, undefined, NaN

// let cost = null;
// const sub = 'premium';

// switch (sub) {
//     case 'free': cost = 0;
//         break;
    
//      case 'pro': cost = 100;
//         break;
    
//      case 'premium': cost = 500;
    
//     default: console.log('invalid');
    
// }

// console.log(cost);

// const min = prompt('Введіть хвилину');

// if (min >= 0 && min <= 14) {
//     console.log('перша чверть');
    
// } else if (min >= 15 && min <= 29) {
//     console.log('друга чверть');
    
// } else if (min >= 30 && min <= 44) {
//     console.log('третя чверть');
    
// } else if (min >= 45 && min <= 59) {
//     console.log('четверта чверть'); 
// } 

// const val = prompt('Введіть назву товару').toLowerCase();
// let cost;

// switch (val) {
//     case 'apple': cost = 10;
//         break;
//     case 'orange': cost = 15;
//         break;
//      case 'carrot': cost = 5;
//         break;
//     case 'potato': cost = 4;
//         break;
//      case 'avocado': cost = 100;
//         break;
    
//     default: alert(`Товару ${val} нема в наявності`)
// }
// if (cost !== undefined) {
//     alert(`${val} коштує ${cost} гривень`)
// }


// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
// const x = 1;  // 1, 0, -3
// x > 0 ? console.log(true) : console.log(false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const x = 'test';
// x === 'test' ? console.log(true): console.log(false);
 

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let x = 13;
// if (x > 10) {
//     x -= 5;
// } else if (x < 10) {
//     x += 5;
// }

// console.log(x);


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let val = prompt('Введіть число від 1 до 12');
// let month;

// switch (Number(val)) {
//     case 1: month = "January"; break;
//     case 2: month = "February"; break;
//     case 3: month = "March"; break;
//     case 4: month = "April"; break;
//     case 5: month = "May"; break;
//     case 6: month = "June"; break;
//     case 7: month = "July"; break;
//     case 8: month = "August"; break;
//     case 9: month = "September"; break;
//     case 10: month = "October"; break;
//     case 11: month = "November"; break;
//     case 12: month = "December"; break;
// }
// if (val >= 1 && val <= 12) {console.log(month); }



//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let val = prompt("Введіть тризначне число");

// if (val.length === 3 && Number(val)) {
    // first method
    // const first = Number(val.charAt(0));
    // const second = Number(val.charAt(1));
    // const third = Number(val.charAt(2));
    // const sum = first + second + third;

    //second method by split
    // const letters = val.split('');
    // const first = Number(letters[0]);
    // const second = Number(letters[1]);
    // const third = Number(letters[2]);
    // const sum = first + second + third;

//     alert(`Сума тризначного числа ${val} дорівнює ${sum}`)
// } else {
//     alert("Невірно введене число");
// }