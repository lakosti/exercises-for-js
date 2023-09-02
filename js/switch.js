//світч працює лише з рядками і числами // виконується строге порівняння// не робимо ніяких математичних операцій
//рядок порівнюється з рядком або число з числом
//патерн  switch(true) -- не використовується бо він сповільнює сам цикл

//1. Напиши скрипт вибору готеля по кількості зірок____________________________
//1 - 20$
// 2 - 30$
// 3 - 50$
// 4 - 70$
// 5 - 120$

//якщо введено щось крім 1-5 то виведи такої кількості зірок немає

// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }
// console.log(`You should pay ${price}$`);

////SWITCH () - сюди вставляється перемінна з якою необхідно порівнювати

// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Не знайдено');
// }
// console.log(price);

//варіант 2 задачі 1 про готелі /// 1,2 = 20$ 3,4 = 30$; 5 = 120$

// const stars = 6;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }
// console.log(price);

///switch (якщо два значення кейса)

// const stars = 5;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Таких даних немає');
// }
// console.log(price);

//ЗАДАЧА 2 Вибір / варіант доставки

// 1 - самовивіз / 2 - кур'єр/ 3 - почта

// const option = "кур'єр"; // не зберігаємо змінні в рядках бо це не надежно

// const option = 1;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'ви можете забрати товар завтра з 12:00';
//         break;
//     case 2:
//         message = "кур'єр доставить товар завтра з 12:00";
//         break;
//     case 3:
//         message = 'товар відправлять завтра з 12:00';
//         break;
//     default:
//         message = 'вам зателефонує менеджер';
// }
// console.log(message);

/////ЗАДАЧА 3 світлофор // обробка null //налу //на  null не працює toLowerCase//буде помилка, якщо нал будемо приводити до нижнього регістру

// let message = prompt('What color');
// let action;

// if (message) {
//     message = message.toLowerCase(); // приведення до нижнього регістру
// }

// switch (message) {
//     case 'red':
//         action = 'action stop';
//         break;
//     case 'yellow':
//         action = 'action ready';
//         break;
//     case 'green':
//         action = 'action go';
//         break;
//     default:
//         action = 'action be carefull';
// }
// console.log(action);
