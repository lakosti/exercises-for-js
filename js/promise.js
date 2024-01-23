// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

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
