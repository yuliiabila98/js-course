// let elem = document.getElementById('elem');

// elem.style.background = 'green';

// let elements = document.querySelectorAll('ul>li:last-child');

// for (let element of elements) {
//     console.log(element);
// }

// let element = document.querySelector('li');

// console.log(element);

// let element = document.getElementsByTagName('div');
// console.log(element);

// let text_hidden = document.getElementById('text-hidden');
// text_hidden.hidden = true;

// let message = document.getElementById('message');
// console.log(message.value);

// let text = document.querySelector('.text-message');
// console.log(text.textContent);

// let text = document.querySelector('.text-message');
// text.textContent = 'Hello, Olga'
// console.log(text.textContent);

// let button = document.querySelector('.button');
// button.style.backgroundColor = 'red'


// let text = document.getElementById('p-text');
// console.log(text.classList);
// console.log(text.classList.contains('blue')); // false
// console.log(text.classList.contains('red')); // true
// text.classList.remove('red');
// console.log(text.classList.contains('red')); // false
// text.classList.add('yellow');
// console.log(text.classList);

// let image = document.querySelector('.image');
// console.log(image.hasAttribute('src')); // true
// console.log(image.hasAttribute('alt')); // true
// console.log(image.getAttribute('src')); // отримує значення

// const item = document.createElement('a');
// item.href = '#';
// item.classList.add('btn');
// item.textContent = '3'

// const nav = document.querySelector('.nav');
// nav.appendChild(item);

// const heading = document.createElement('h1');
// heading.textContent = 'Welcome to our company';

// const container = document.querySelector('.container');
// container.insertBefore(heading, nav)

// nav.removeChild(item); // an old method
// item.remove();

// const text = document.querySelector('.text');
// const parent = document.querySelector('.parent');
// const clone = text.cloneNode(true);
// console.log(clone);
// parent.appendChild(clone);

// const container = document.querySelector('.container');
// const text = `<p>Sorry</p>`;
// container.innerHTML += text; // перерендерить всю сторінку, не гуд

// const list = document.querySelector('#list');
// list.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>')
// list.insertAdjacentHTML('beforeend', '<li>beforeend</li>')
// list.insertAdjacentHTML('afterend', '<p>afterend</p>')

// =======================================
// Homework

// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script>/* ваш код */</script>
// </body>
// </html>

// 1
// const element = document.querySelector('div');
// const has_attr = element.hasAttribute('data-widget-name'); // true
// const attr = element.getAttribute('data-widget-name');
// console.log(element, has_attr, attr);

// 2
// const element = document.querySelector('[data-widget-name]');
// const attr = element.getAttribute('data-widget-name');
// console.log(element, attr);

// 3 
// const element = document.querySelector('[data-widget-name="menu"]');
// const attr = element.dataset.widgetName;
// console.log(element, attr);
