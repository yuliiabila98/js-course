// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');
// const btn3 = document.querySelector('#btn3');
// const btn4 = document.querySelector('#btn4');
// const btn5 = document.querySelector('#btn5');
// const btn6 = document.querySelector('#btn6');

// btn1.addEventListener('click', () => console.log('click'));
// btn2.addEventListener('contextmenu', () => console.log('contextmenu'));
// btn3.addEventListener('mouseover', () => console.log('mouseover'));
// btn4.addEventListener('mouseup', () => console.log('mouseup'));
// btn5.addEventListener('mousemove', () => console.log('mousemove'));
// btn6.addEventListener('keydown', () => console.log('keydown'));

// -----------------------------------------

// const add_btn = document.querySelector('#add');
// const remove_btn = document.querySelector('#remove');
// const click_btn = document.querySelector('#click');

// const handleClick = () => {
//     console.log('hello');
// }

// add_btn.addEventListener('click', () => {
//     click_btn.addEventListener('click', handleClick)
// })

// remove_btn.addEventListener('click', () => {
//     click_btn.removeEventListener('click', handleClick)
// })

// -----------------------------------------

// const click_btn = document.querySelector('#click');

// const infoClick = (event) => {
//     console.log('event', event);
// }

// click_btn.addEventListener('click', infoClick)

// ----------------------------------------- form

// const form = document.querySelector('.form');
// const login_input = form.querySelector('input[type="text"]')
// const password_input = form.querySelector('input[type="password"]')

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const login = login_input.value;
//     const password = password_input.value;

//     console.log(`login: ${login}, password: ${password}`);
//     form.reset();
// }

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const item = document.querySelector('#item');

// parent.addEventListener('click', () => console.log('click parent'));
// child.addEventListener('click', () => console.log('click child'));
// item.addEventListener('click', () => console.log('click item'));

// const handleClick = (event) => {
//     console.log('event', event.target);
// }

// parent.addEventListener('click', handleClick)

// const itemClick = (event) => {
//     console.log('itemClick stop');
//     event.stopPropagation();
// };

// const childClick = (event) => {
//     console.log('childClick stop');
//     event.stopPropagation();
// };

// const parentClick = (event) => {
//     console.log('parentClick stop');
//     event.stopPropagation();
// };


// parent.addEventListener('click', parentClick);
// child.addEventListener('click', childClick);
// item.addEventListener('click', itemClick);

// const nav = document.querySelector('.nav');

// nav.addEventListener('click', handleClick);

// function handleClick(event)  {
//     const check_class = nav.querySelector('li.active');

//     if (check_class) {
//         event.target.classList.remove('active')
//     } else {
//         event.target.classList.add('active')
//     }
// }


// const ball = document.querySelector('.ball');

// ball.onmousedown = function (event) {
//     function move(pageX, pageY) {
//         ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//         ball.style.top = pageY - ball.offsetWidth / 2 + 'px';
//     }

//     function onMouseMove(event) {
//          move(event.pageX, event.pageY);
//     }

//     document.addEventListener('mousemove', onMouseMove)

//     ball.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove)
//     }
// }


// ----------------------------------------- homework

// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент <div id="text"> зникав.

// const button = document.querySelector('.btn');
// const text = document.querySelector('#text');

// button.addEventListener('click', () => {
//     text.remove();
// })

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//     button.remove();
// })

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const container = document.querySelector('.container');
// const list = document.querySelector('.list');
// const toggle_icon = document.querySelector('#toggle-icon');

// const handleClick = () => {
//     list.classList.toggle('hidden');

//     if (list.classList.contains('hidden')) {
//         toggle_icon.textContent = '+'
//     } else {
//          toggle_icon.textContent = '-'
//     }
// }

// container.addEventListener('click', handleClick)
