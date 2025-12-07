// const btn = document.querySelector('.js-get-data');

// btn.addEventListener('click', getUrl);

// function getUrl() {
//     return fetch('https://api.monobank.ua/bank/currency')
// }

// let promise = fetch(url, {
//     method: 'GET',
// })

// async/await - асинхронні функції

// async function a() {
//  // return Promise.resolve(true);
//     return true;
// }

// a().then(console.log);

// let value = await promise;

// async function func() {
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000)
//     })

//     let result = await prom;

//     console.log(result);
    
// }

// func();

// let response = await fetch('https://api.monobank.ua/bank/currency')

// const monoCurrency = async () => {
//     let response = await fetch('https://api.monobank.ua/bank/currency');

//     if (response.ok) {
//         console.log('ok', response.status);
//     } else {
//         console.log('err', response.status);
        
//     }
// }

// monoCurrency();


// const headers = new Headers({
//     'Content-Type' : 'application/json'
// })

// console.log(headers.has('Content-Type'));

// const postTest = async () => {
//     let user = {
//         name: 'Yuliia',
//         city: 'Odesa',
//     }

//     let response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

// postTest()

// try {
//     console.log('Start');
//     a;
//     console.log('Finish');
// } catch (err) {
//     console.log('Err');
// }

// try {} catch (err) {} - синхронна

// try {
//     setTimeout(function () {
//         // console.log('d');
//         sa;
//     }, 1000)
// } catch (err) {
//     console.log('err', err);
// }

// setTimeout(() => {
//     try {
//         console.log('OK');
//         da;
//     } catch (err) {
//         console.log('err', err);
//     }
// }, 1000);

// try {
//     da;
// } catch (error) {
//     console.log(error.stack);
// }

// let json = `{"name": "ann"}`;

// try {
//     let user_data = JSON.parse(json);

//     if (!user_data.city) {
//         throw new SyntaxError('No city')
//     }

//     console.log('start');
// } catch (error) {
//     console.log(error.message);
    
// } finally {
//      console.log('finally');
    
// }


// websocket

// let socket = new WebSocket('wss://javascript.info/article/websocket/demo/hello');

// socket.onopen = function (event) {
//     console.log('Connect Start');
//     socket.send('Hi')
//     socket.send('I am Yuliia')
// };

// socket.onmessage = function (event) {
//     console.log('message', event.data);
// }

// socket.onclose = function (event) {
//     if (event.wasClean) {
//         console.log('Connection End', event.code);
//     } else {
//         console.log('Connection Torn', event.code);
//     }
// }

// socket.onerror = function (err) {
//     console.log('Connection Error', err);
// }