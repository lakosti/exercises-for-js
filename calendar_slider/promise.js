//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */
//синхронна фн

function greet() {
    return 'hello world';
}
//асинхронна фн

function greet2() {
    return new Promise((res, rej) => {
        setTimeout(() => res('Hello'), 1000);
    });
}
greet2().then(resp => console.log(resp));

/////////2-й варіант

// function greet2() {
//     new Promise((res, rej) => {
//         setTimeout(() => res('Hello'), 1000);
//     }).then(resp => console.log(resp));
// }
// greet2();

//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
    new Promise(res => {
        setTimeout(() => {
            const data = 1;
            console.log(data);
            res(data);
        }, 1000);
    });

const getNewData = () =>
    new Promise(res => {
        setTimeout(() => {
            const data = 2;
            console.log(data);
            res(data);
        }, 1000);
    });

const getAnotherData = () =>
    new Promise(res => {
        setTimeout(() => {
            const data = 3;
            console.log(data);
            res(data);
        }, 1000);
    });

const getLastData = () =>
    new Promise(res => {
        setTimeout(() => {
            const data = 4;
            console.log(data);
            res(data);
        }, 1000);
    });

// const newArray = [];
// getData()
//   .then((data) => {
//     newArray.push(data);
//     return getNewData();
//   })
//   .then((data) => {
//     newArray.push(data);
//     return getAnotherData();
//   })
//   .then((data) => {
//     newArray.push(data);
//     return getLastData();
//   })
//   .then((data) => {
//     newArray.push(data);
//     console.log(newArray);
//   });

// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(
//   (data) => console.log(data)
// );

//TODO:====================03==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

// function checkValue(value) {
//   return new Promise((res, rej) => {
//     if (!value || isNaN(value)) rej("error");
//     if (value % 2 === 0) setTimeout(() => res("event"), 1000);
//     setTimeout(() => res("odd"), 2000);
//   });
// }
// const value = prompt("Paste value");
// checkValue(value)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
