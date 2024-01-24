// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

//ПРОМІС - запит на бекенд  ---- це об'єкт який представляє результат асинхронної операції (ств промісу є синхронною операцією, а обробка(then catch finally) --  асинхронною)
//then.catch.finally -- обробка результату промісу
//then -- (value)=> {} приймає 2 колбек функції (resolve / reject) але у ньому не прийнято отпрацювувати reject, бо він не попаде до catch потім (then зазвичай 2 --- в одному парсять в іншому опрацювують) // якзо  в then помилка вона переходить в кетч і виконання далі then  припиняється
//catch -- (error) => {} -- відловлення помилки
//finaly -- () => {} // нічого не приймає // ВІДПОВІДАЄ ЗА ЩОСЬ СПІЛЬНЕ (закриття модального вікна, спінер)

// --------------------з такими промісами ми будемо працювати-----------------------

//const promise = fetch('link_to_server') -- запит на бекенд що містить в собі проміс
//console.log(promise) // буде в стані pending
//опрацювуємо як звичайний проміс: promise.then((response.json) => console.log(response)).catch((err)=> console.log(err))

// Мікро процеси мають більший пріорітет ніж макро

// Мікро процеси
// 1 Promise
// 2 Observer

// Макро процеси
// 1 setTimeout
// 2 setInterval
// 3 setImmediate -- https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// 4 requestAnimationFrame -- https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

//СТВОРЕННЯ ПРОМІСУ

// const isSuccess = true;

// // створння промісу -- повертає об'єкт + може вибити помилку
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isSuccess) {
//             resolve('Success! Value passed to resolve function');
//         } else {
//             reject('Error! Error passed to reject function');
//         }
//     }, 2000);
// });

// // обробка результату промісу -- повертає рядок // відловлює помилки (без цього буде помилка в коді і скрипт стане)
// promise
//     //позитивний результат
//     .then(value => {
//         console.log(value); // "Success! Value passed to resolve function"
//     })
//     //знаходження помилок
//     .catch(error => {
//         console.log(error); // "Error! Error passed to reject function"
//     })
//     //виконається у будь якому випадку
//     .finally(() => console.log('Promise settled')); // "Promise settled"

///ПОРЯДОК ВИКОНАННЯ (синхронний код має найвищу перевагу, потім проміси і потім асинхрон) 1 7 3 5 4 6 2

// console.log("1");
// setTimeout(() => console.log("2"), 10);
// Promise.resolve("3").then((value) => console.log(value));
// Promise.reject("4").then((value) => console.log(value)).catch(err=>console.log(err));
// Promise.resolve("5").then((value) => console.log(value));
// setTimeout(() => console.log("6"), 0);
// console.log("7");

////// 1 4 2 3
// console.log('1');
// setTimeout(() => {
//     console.log('2');
//     Promise.resolve('3').then(value => console.log(value));
// }, 10);

// console.log('4');

///-----------------------------------------------------постійна робота з промісом

// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// console.log(promise);

// promise
// .then((resp) => resp.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));

////////////////////////////////////////////// ALEX ///////////////////////////////////////////////////////////
