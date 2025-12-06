// localStorage.setItem('name', 'Yuliia')
// const a = localStorage.getItem('name');
// console.log(a);

// function check() {
//     let val = document.getElementsByName('radio')
//     if (val[0].checked) {
//         console.log('male');
//     } else {
//         console.log('female');
//    }
    
// }

// const form = document.querySelector('.form');
// const name_input = document.querySelector('.input-name')
// const last_name_input = document.querySelector('.input-last-name')
// const age = document.querySelector('#age');
// const sex = document.getElementsByName('radio');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();

//     const information = {
//         name: name_input.value,
//         last_name: last_name_input.value,
//         age: age.value,
//         name: sex[0].checked,
//     }

//     console.log(information);
    
//     localStorage.setItem('information', JSON.stringify(information));
// }


// if (localStorage.getItem('information')) {
//     const ls = JSON.parse(localStorage.getItem('information'));
//     name_input.value = ls.name;
//     last_name_input.value = ls.last_name;
// }

// const form = document.querySelector('#form');
// let form_data = {};

// form.addEventListener('input', function (event) {
//     form_data[event.target.name] = event.target.value;

//     localStorage.setItem('form_data', JSON.stringify(form_data));
// })

// if (localStorage.getItem('form_data')) {
//     form_data = JSON.parse(localStorage.getItem('form_data'));

//     for (let key in form_data) {
//         form.elements[key].value = form_data[key];
//     }
// }