// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

//ЯКЩО ДЕКІЛЬКА THEN ТО ОБОВЯЗКОВО ПОТРІБНО ПОВЕРТАТИ ЙОГО ІНАКШЕ БУДЕ UNDEFINED

//ПРОМІС - запит на бекенд  ---- це об'єкт який представляє результат асинхронної операції (ств промісу є синхронною операцією (new Promise), а обробка(then catch finally) --  асинхронною)
//then.catch.finally -- обробка результату промісу  (МІКРОЗАДАЧА)
//then -- (value)=> {} приймає 2 колбек функції (resolve / reject) але у ньому не прийнято отпрацювувати reject, бо він не попаде до catch потім (then зазвичай 2 --- в одному парсять в іншому опрацювують) // якзо  в then помилка вона переходить в кетч і виконання далі then  припиняється
//catch -- (error) => {} -- відловлення помилки
//finaly -- () => {} // нічого не приймає // ВІДПОВІДАЄ ЗА ЩОСЬ СПІЛЬНЕ (закриття модального вікна, спінер)
//* resolve - фукнція, яка переведе проміс у стан Fullfilled
//* reject - функція, яка переведе проміс у стан Rejected

/*
Проміс має 3 стани:
- Pending - стан створення промісу, означає, що проміс поки що не виконався
- Fullfilled - проміс виконався успішно (обролюється методом .then())
- Rejected - проміс виконався неуспішно (обролюється методом .catch())

-- Також між програмістами ви можете почути термін Settled - означає, що проміс виконався (тобто, два стани: Fullfilled, Rejected)
*/

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

////// 1 2 3
// console.log(1);
// const promise = new Promise((res, rej) => {
//     console.log(2); // СТВОРЕННЯ ПРОМІСУ ЦЕ СИНХРОННА ОПЕРАЦІЯІ
// })
// console.log(3);
///-----------------------------------------------------постійна робота з промісом

// const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");

// console.log(promise);

// promise
// .then((resp) => resp.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));

////////////////////////////////////////////// ALEX ///////////////////////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//     //* resolve - фукнція, яка переведе проміс у стан Fullfilled
//     //* reject - функція, яка переведе проміс у стан Rejected

//     const isPromiseFullfilled = Math.random() > 0.5;

//     setTimeout(() => {
//         if (isPromiseFullfilled) {
//             resolve('Проміс виконався успішно!'); // переводимо проміс у стан Fullfilled
//         } else {
//             reject('Проміс виконався неуспішно!'); // переводимо проміс у стан Rejected
//         }
//     }, 1000);
// });

//! Важливо запамʼятати, що в якості значення параметру колбек фукнції then (value) приходить те, що ви передали у функцію resolve, або те, що повернув (return) попердній then в вашому ланцюгу!!!
// then потрібен не тільки для обробки успішного результату виконання асинхронного коду, а й задля імітації синхронності виконання асинхронного коду.

// promise
//     .then(value => {
//         console.log(`✅ ${value}`);
//         return value;
//     })
//     .then(value => {
//         console.log(1, value);
//         return 10;
//     })
//     .then(value => {
//         console.log(2, value);
//         return 'Hello world';
//     })
//     .then(value => {
//         console.log(3, value);
//     })
//     .catch(err => {
//         console.log(`❌ ${err}`);
//     })
//     .finally(() => {
//         console.log('Проміс завершився!');
//     });
